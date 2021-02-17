import { Component, OnInit } from '@angular/core';
import {RepositoryService} from '../../SharedData/repository.service';

import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductType} from '../interfaces/ProductType';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.css']
})
export class ConfirmOrderComponent implements OnInit {

  public farmerid = 1;
  public result: any;
  orderId: any;
  public closeResult: any;
  private modalOptions: { backdropClass: string; backdrop: string };
  constructor(private repository: RepositoryService, private modalService: NgbModal)
  {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    };
  }
orderForm: any;
  ngOnInit(): void {
    this.getOrdersForFarmer(this.farmerid);
    this.orderForm = new FormGroup({
      shipDate: new FormControl(''),
      des: new FormControl('')
    });
  }

  // tslint:disable-next-line:typedef
  getOrdersForFarmer(fid: any){

      this.repository.getData('farmer/getfrorder/' + this.farmerid)
        .subscribe(res => {
            this.result = res;
            const myObjStr = JSON.stringify(res);

            console.log('get orders->', fid, this.result);

          },
          (error) => {
          });

  }

  open(content: any, orderId: any) {
    this.orderId = orderId;
    // this.getItemById(this.itemId);
    // @ts-ignore
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
  onSubmit(value: { shipDate: any; des: any; }){
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    const t: OrderConfirm = {
      ship_date: value.shipDate,
      ord_description: value.des,
      order_id: this.orderId

    };
    console.log('t ->',t);
    const apiurl = 'farmer/confirmorder';
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

  public rejectOrder(tid: number) {

    this.repository.getData('farmer/rejectorder/' + tid)
      .subscribe(res => {
          // this.taskdetails = res as any;
          window.location.reload();

        },
        (error) => {
        })


  }

}
