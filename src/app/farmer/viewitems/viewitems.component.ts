import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RepositoryService} from '../../SharedData/repository.service';
import {ModalDismissReasons, NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-viewitems',
  templateUrl: './viewitems.component.html',
  styleUrls: ['./viewitems.component.css']
})
export class ViewitemsComponent implements OnInit {

  public result: any;
public typeID: any;
public itemId: any;
  public item: any;
  constructor(private http: HttpClient, private modalService: NgbModal, private repository: RepositoryService, private route: Router, private activatedroute: ActivatedRoute)
  {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    };

    this.activatedroute.params.subscribe(data => {
      this.typeID = data.id;
      console.log('type id 111-->', data.id);
    });
  }
  title = 'ng-bootstrap-modal-demo';
  closeResult: string | undefined;
  modalOptions: NgbModalOptions;
  content: any;
  ngOnInit(): void {
    this.getAllItems(this.typeID);
  }

  // tslint:disable-next-line:typedef
  public getAllItems(tid: any) {
    // tslint:disable-next-line:max-line-length
    // this.result = [{itemName: 'Beans', qty: 10}, {itemName: 'Carrot', qty: 17}, {itemName: 'Leeks', qty: 20}, {itemName: 'Cabage', qty: 50}];
    this.repository.getData('farmer/getallfor/' + tid)
      .subscribe(res => {
          this.result = res;
          const myObjStr = JSON.stringify(res);

          console.log('get all result->', this.result);

        },
        (error) => {
        });
  }

  // tslint:disable-next-line:typedef
  getItemById(itemId: any){
    this.repository.getData('farmer/getitem/' + itemId)
      .subscribe(res => {
          this.item = res;
          const myObjStr = JSON.stringify(res);

          console.log('get item->', this.item);

        },
        (error) => {
        });
  }
  // tslint:disable-next-line:typedef
  open(content: any, itemid: any) {
    this.itemId = itemid;
    this.getItemById(this.itemId);
    this.modalService.open(content, this.modalOptions).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  // tslint:disable-next-line:typedef
  public deleteItem(tid: number) {

   this.repository.getData('farmer/deleteitem/' + tid)
      .subscribe(res => {
          // this.taskdetails = res as any;
          window.location.reload();

        },
        (error) => {
        })


  }

}
