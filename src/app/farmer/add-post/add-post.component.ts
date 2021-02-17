import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {RepositoryService} from '../../SharedData/repository.service';
import {Item} from '../interfaces/Item';
import {Post} from '../interfaces/Post';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
 public fileimg: any;
 public farmerId;
  constructor(private repository: RepositoryService)
  {
this.farmerId =1;
  }

  public postForm = new FormGroup({
    itemName: new FormControl(''),
    quantity: new FormControl(''),
    unitPrice: new FormControl(''),
    expireDate: new FormControl(''),
    harvestDate: new FormControl(''),
    imgfile: new FormControl(''),
    description: new FormControl('')

  });
  ngOnInit(): void {

  }

  onSubmit(value: { itemName: any;  selectedType: any; quantity: any; unitPrice: any; expireDate: any; harvestDate: any; itemImage: any; description: any }) {
    console.log('value- >', value.selectedType);

    const t: Post = {


      itemName: value.itemName,
      quantity: value.quantity,
      unitPrice: value.unitPrice,
      expireDate: value.expireDate,
      harvestDate: value.harvestDate,
      itemImage: this.fileimg,
      description: value.description,
    farmerId: this.farmerId
    };
    console.log('t ->', t);
    const apiurl = 'farmer/addpost';
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

}
