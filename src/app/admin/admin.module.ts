import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { EventsComponent } from '../events/events.component';
import { EventComponent } from '../events/event/event.component';
import { EventListComponent } from '../events/event-list/event-list.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
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
import { TestComponent } from './test/test.component';
import { ShopsComponent } from '../shops/shops.component';
import { ShopComponent } from '../shops/shop/shop.component';
import { ShopListComponent } from '../shops/shop-list/shop-list.component';
import { StoresComponent } from '../stores/stores.component';
import { StoreComponent } from '../stores/store/store.component';
import { StoreListComponent } from '../stores/store-list/store-list.component';
import { ClientsComponent } from '../clients/clients.component';
import { ClientListComponent } from '../clients/client-list/client-list.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import {
  AngularFireStorageModule,
  AngularFireStorageReference,
  AngularFireUploadTask
} from "@angular/fire/storage";
@NgModule({
  declarations: [
    SidenavComponent,EventsComponent,
    EventComponent,
    EventListComponent,
    TestComponent,
     ShopsComponent,
    ShopComponent,
    ShopListComponent,
    StoresComponent,
    StoreComponent,
    StoreListComponent,
    ClientsComponent,
    ClientListComponent,
  ],
  imports: [
   CommonModule,
    MatSortModule,MatPaginatorModule,MatTableModule, MatSnackBarModule,MatButtonModule, MatFormFieldModule, MatInputModule,MatToolbarModule,MatSidenavModule,MatIconModule,MatListModule,MatGridListModule,

    ReactiveFormsModule,
    HttpClientModule,AdminRoutingModule,MatDialogModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),AngularFireStorageModule
  ]
})
export class AdminModule { }
