import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RepositoryService} from '../../SharedData/repository.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  public result: any;
  urllink = 'assets/images/1.jpg';
public user:any;
public user_id;
  constructor(private http: HttpClient, private repository: RepositoryService, private route: Router) {
    this.user_id=1;
  }

  ngOnInit(): void {
    this.getUserById(this.user_id);
  }

  getUserById(uid: any){
    this.repository.getData('farmer/getuser/' + uid)
      .subscribe(res => {
          this.result = res;
          const myObjStr = JSON.stringify(res);

          console.log('get item->', this.result);

        },
        (error) => {
        });
  }




}


