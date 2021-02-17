import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RepositoryService} from '../../SharedData/repository.service';
import {ModalDismissReasons, NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirmed-orders',
  templateUrl: './confirmed-orders.component.html',
  styleUrls: ['./confirmed-orders.component.css']
})
export class ConfirmedOrdersComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  public order_id: any;
  // tslint:disable-next-line:variable-name
  public farmer_id;
  public  ord_status:any;
  constructor(private router: Router, private repository: RepositoryService, private modalService: NgbModal)
  {
    this.farmer_id = 1;
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    };
  }
  title = 'ng-bootstrap-modal-demo';
  closeResult: string | undefined;
  modalOptions: NgbModalOptions;
  content: any
  public result: any;

// tslint:disable-next-line:variable-name

  // tslint:disable-next-line:variable-name
  public confirmed_orders: any;
  ngOnInit(): void {
    console.log('inside confirmed')
    this.getConfirmedOrders(this.farmer_id);
  }
  // tslint:disable-next-line:typedef
  getConfirmedOrders(fid: any){

    this.repository.getData('farmer/confirmedorders/' + Number(this.farmer_id))
      .subscribe(res => {
        console.log(res)
          this.confirmed_orders = res;
        this.ord_status = 'confirmed';
          const myObjStr = JSON.stringify(res);

          console.log('get confirmed_orders->', this.confirmed_orders);

        },
        (error) => {
        });
  }

  open(content: any, oid: any) {

    this.getOrderById(oid);
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
  getOrderById(orderid: any){

    this.repository.getData('farmer/getorder/' + Number(orderid))
      .subscribe(res => {
           this.result = res;
           console.log('orderbyid--',res)
           const myObjStr = JSON.stringify(res);

           this.ord_status = 'confirmed';
        },
        (error) => {
        });
  }
}
