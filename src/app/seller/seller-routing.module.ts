import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsSellerComponent } from './products-seller/products-seller.component';
import { SellerComponent } from './seller.component';
import { LoginComponent } from '../login/login.component';
import { SellerAccountComponent } from './seller-account/seller-account.component';


const routes: Routes = [
  {
    path: '',
    component: SellerComponent,
    children: [
      { path: '', redirectTo: '/seller/login', pathMatch: 'full' },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'myaccount',
        component: SellerAccountComponent
      },
      
    ]
  },
 
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
