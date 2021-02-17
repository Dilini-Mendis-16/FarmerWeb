import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FarmerModule } from './farmer/farmer.module';
import {NgbNavModule, NgbModule, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    // MyProfileComponent,
    // OrdersComponent,
    // TenderComponent,
    // AddPostComponent,
    // ChangePasswordComponent,
    // SwitchAccountComponent,
    // LogOutComponent,
    // RatingsComponent,
    // InsertItemComponent,
    // //TitlebarComponent,
    // SidenavbarComponent,
    // ViewitemsComponent,
    // ViewTypesComponent,
    // AddProductComponent,
    // ConfirmOrderComponent,
    // ConfirmedOrdersComponent,
    // // ViewPostsComponent,
    // FarmerPostComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FarmerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbNavModule,
    NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
