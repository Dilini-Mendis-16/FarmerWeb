import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RepositoryService} from '../../SharedData/repository.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Item} from '../interfaces/Item';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  public id: any;
  constructor(private http: HttpClient, private repository: RepositoryService, private route: Router, private activatedroute: ActivatedRoute)
  {
    this.activatedroute.params.subscribe(data => {
      this.id = data.id;
      console.log('type id in orders-->', data.id);
    });
  }
  private ImageUrl: any;
  public  file: any;
  public typeList: any;
  public selectedType: any;



  public orderForm = new FormGroup({
    itemName: new FormControl(''),
    quantity: new FormControl(''),
    unitPrice: new FormControl(''),
    expireDate: new FormControl(''),
    harvestDate: new FormControl(''),
    name: new FormControl(''),
    imgFile: new FormControl(''),
    fileSource: new FormControl(''),
    selectedType: new FormControl('')

  });

  // tslint:disable-next-line:typedef
  myapp: any;

  ngOnInit(): void {
    this.getAllTypes();
  }

  // tslint:disable-next-line:typedef
  onSubmit(value: { itemName: any; selectedType: any; quantity: any; unitPrice: any; expireDate: any; harvestDate: any; itemImage: any; }) {
    console.log('value- >', value.selectedType);

    const t: Item = {


      itemName: value.itemName,
      quantity: value.quantity,
      unitPrice: value.unitPrice,
      expireDate: value.expireDate,
      harvestDate: value.harvestDate,
      itemImage: this.file,
      type_id: Number(this.id)

    };
    console.log('t ->', t);
    const apiurl = 'farmer/addItem';
    this.repository.postData(apiurl, t)
      .subscribe(res => {
          console.log('---11122-', res);
          // this.route.navigate(['/order', Number(this.id)]);
          window.location.reload();
        },
        (error => {

        })
      );
  }

  // tslint:disable-next-line:typedef
  onFileChange(event: Event) {
    // @ts-ignore

    // @ts-ignore
    if (event.target.files.length > 0) {
      // @ts-ignore
      this.file = event.target.files[0];
    }
  }

  // tslint:disable-next-line:typedef
  public getAllTypes() {
    this.typeList = [{tye_id: 1, type_name: 'veg'},{type_id: 2, type_name: 'fruit'}, {type_id: 3, type_name: 'bus'}];
    console.log(this.typeList)
    // tslint:disable-next-line:max-line-length
    this.repository.getData('farmer/getTypes')
      .subscribe(res => {
          this.typeList = res;
          const myObjStr = JSON.stringify(res);

          console.log('get all result->', this.typeList);

        },
        (error) => {
        });
  }
  passId(id: any, name: any){
    console.log('selected id', id);

  }

}
