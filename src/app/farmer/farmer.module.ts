import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddorderComponent } from './addorder/addorder.component';
import { RouterModule } from '@angular/router';
// @ts-ignore

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ViewPostsComponent} from './view-posts/view-posts.component';
import {AddProductComponent} from './add-product/add-product.component';
import {MyProfileComponent} from './my-profile/my-profile.component';
import {HomeComponent} from './home/home.component';
import {RatingsComponent} from './ratings/ratings.component';
import {FarmerPostComponent} from './farmer-post/farmer-post.component';
import {ConfirmOrderComponent} from './confirm-order/confirm-order.component';
import {ViewTypesComponent} from './view-types/view-types.component';
import {TitlebarComponent} from './CommonElement/titlebar/titlebar.component';
import {ViewitemsComponent} from './viewitems/viewitems.component';
import {ConfirmedOrdersComponent} from './confirmed-orders/confirmed-orders.component';
import {AddPostComponent} from './add-post/add-post.component';


@NgModule({
  declarations: [TitlebarComponent,
    ViewPostsComponent,
    AddProductComponent,
    MyProfileComponent,
    HomeComponent,
    RatingsComponent,
    FarmerPostComponent,
    ViewTypesComponent,
    ConfirmOrderComponent, TitlebarComponent, ViewitemsComponent, ConfirmedOrdersComponent, AddPostComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'addorder', component: ViewPostsComponent },
      { path: 'product/:id', component: AddProductComponent},
      { path: 'profile', component: MyProfileComponent },
      {path: 'home', component: HomeComponent},
      {path: '', component: HomeComponent},
      { path: 'rating', component: RatingsComponent },
      { path: 'post', component: FarmerPostComponent },
      {path: 'types', component: ViewTypesComponent},
      {path: 'order', component: ConfirmOrderComponent}



  ])
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [TitlebarComponent]
})
export class FarmerModule { }
