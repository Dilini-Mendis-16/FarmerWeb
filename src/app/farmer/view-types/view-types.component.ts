import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RepositoryService} from '../../SharedData/repository.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductType} from '../interfaces/ProductType';
import {ModalDismissReasons, NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-types',
  templateUrl: './view-types.component.html',
  styleUrls: ['./view-types.component.css']
})
export class ViewTypesComponent implements OnInit {
  // tslint:disable-next-line:ban-types
  result: any;
typeId: any;
typeForm:any;
  title = 'ng-bootstrap-modal-demo';
  closeResult: string | undefined;

  content: any;
  constructor(private http: HttpClient, private repository: RepositoryService, private route: Router,private modalService: NgbModal) {

    this.typeForm = new FormGroup({
      typeName: new FormControl(''),
      des: new FormControl(''),
    });

    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    };
  }
  modalOptions: NgbModalOptions ;
  ngOnInit(): void {
    this.getAllItems();
  }
  // tslint:disable-next-line:typedef
  public getAllItems() {
    // tslint:disable-next-line:max-line-length
    this.repository.getData('farmer/getTypes')
      .subscribe(res => {
          this.result = res;
          this.typeId = this.result.typeId;
          const myObjStr = JSON.stringify(res);

          console.log('get all result->', this.result);

        },
        (error) => {
        });
  }

  // tslint:disable-next-line:typedef
   // @ts-ignore
  // tslint:disable-next-line:typedef
  routeTo(typeId: any){
    this.route.navigate(['/product', typeId]);
  }

  onSubmit(value: { typeName: any; des: any; }){
    const t: ProductType = {
      type_name: value.typeName,
      description: value.des,


    };
    console.log('t ->',t);
    const apiurl = 'farmer/addType';
    this.repository.postData(apiurl, t)
      .subscribe(res => {
          console.log('----', res);
          // @ts-ignore
          //this.router.navigate(['/home']);
          window.location.reload();
        },
        (error => {

        })
      );
  }
  // tslint:disable-next-line:typedef
  open(content: any) {
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
}
