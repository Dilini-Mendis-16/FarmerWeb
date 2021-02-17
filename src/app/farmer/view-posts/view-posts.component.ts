import { Component, OnInit } from '@angular/core';
import {RepositoryService} from '../../SharedData/repository.service';

@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.css']
})
export class ViewPostsComponent implements OnInit {
public farmerId;
public result: any;
  constructor(private repository: RepositoryService)
  {
    this.farmerId = 1;
  }

  ngOnInit(): void {
    this.getPostsByFarmer(this.farmerId);
  }

  getPostsByFarmer(fid: any){


      this.repository.getData('farmer/farmerpost/' + Number(fid))
        .subscribe(res => {
            this.result = res;
            const myObjStr = JSON.stringify(res);

            console.log('get orders->', fid, this.result);

          },
          (error) => {
          });
  }
  public deletePost(pid: number) {

    this.repository.getData('farmer/deletepost/' + pid)
      .subscribe(res => {
          // this.taskdetails = res as any;
          window.location.reload();

        },
        (error) => {
        })


  }

}
