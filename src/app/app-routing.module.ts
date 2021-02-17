import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  // {path: '', component: HomeComponent, children:[
  //   { path: 'page-1', component: MyProfileComponent },
  //   { path: 'page-2', component: OrdersComponent },
  //   { path: 'page-3', component: TenderComponent },
  //   { path: 'page-4', component: AddPostComponent },
  //   { path: 'page-5', component: RatingsComponent },
  //   { path: 'page-6', component: ChangePasswordComponent },
  //   { path: 'page-7', component: SwitchAccountComponent },
  //   { path: 'page-8', component: LogOutComponent },
  //   {path: 'page-9', component: InsertItemComponent},
  //   { path: 'farmer', loadChildren: "./farmer/farmer.module#FarmerModule" },

  // ]   }

  { path: 'farmer', loadChildren: './farmer/farmer.module#FarmerModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
