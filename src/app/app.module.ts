import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from "@angular/forms";


import { ShopService } from './shared/shop.service';


import { environment } from '../environments/environment';



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
import {FormsModule} from '@angular/forms'

import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';
import { SideNavComponent } from './side-nav/side-nav.component';


import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SellersComponent } from './sellers/sellers.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    MatConfirmDialogComponent,
    SideNavComponent, 
    SellersComponent, HomeComponent,       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule, MatSortModule,MatPaginatorModule,MatTableModule, MatSnackBarModule,MatButtonModule, MatFormFieldModule, MatInputModule,MatToolbarModule,MatSidenavModule,MatIconModule,MatListModule,MatGridListModule,

    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ShopService],
  bootstrap: [AppComponent],
})
export class AppModule { }
