import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './products-seller/product/product.component';
import { ProductListComponent } from './products-seller/product-list/product-list.component';
import { ProductsSellerComponent } from './products-seller/products-seller.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from "@angular/material/icon"
import {MatListModule} from '@angular/material/list'
import {MatGridListModule} from '@angular/material/grid-list'
import {MatInputModule} from '@angular/material/input'
import {MatFormFieldModule} from "@angular/material/form-field"
import {MatButtonModule} from "@angular/material/button"
import {MatSnackBarModule} from "@angular/material/snack-bar"
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator'
import {MatSortModule} from "@angular/material/sort"
import {MatDialogModule} from "@angular/material/dialog";
import { HomeSellerComponent } from './home-seller/home-seller.component';
import { SellerComponent } from './seller.component';
import { SellerRoutingModule } from './seller-routing.module';
import { LoginComponent } from '../login/login.component';
import { SellerAccountComponent } from './seller-account/seller-account.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/storage';


@NgModule({
  declarations: [
  
   ProductsSellerComponent, ProductComponent,
    ProductListComponent,
    HomeSellerComponent,
    SellerComponent,LoginComponent, SellerAccountComponent
  ],
  imports: [
    CommonModule,
    MatSortModule,MatPaginatorModule,MatTableModule, MatSnackBarModule,MatButtonModule, MatFormFieldModule, MatInputModule,MatToolbarModule,MatSidenavModule,MatIconModule,MatListModule,MatGridListModule,

    ReactiveFormsModule,
    HttpClientModule,SellerRoutingModule,MatDialogModule,
    FormsModule,AngularFireModule.initializeApp(environment.firebaseConfig),AngularFireStorageModule

  ]
})
export class SellerModule { }
