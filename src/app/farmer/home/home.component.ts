import { Component, OnInit } from '@angular/core';
import {NgbModalConfig, NgbModal, NgbModalOptions, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup} from '@angular/forms';
import {Item} from '../interfaces/Item';
import {ProductType} from '../interfaces/ProductType';
import {RepositoryService} from '../../SharedData/repository.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(config: NgbModalConfig, private router: Router,private repository: RepositoryService)
  {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    };
  }
  title = 'ng-bootstrap-modal-demo';
  closeResult: string | undefined;
  modalOptions: NgbModalOptions;
  content: any;
  // tslint:disable-next-line:typedef
  typeForm: any;

  ngOnInit(): void {

  }

  // tslint:disable-next-line:typedef

}
