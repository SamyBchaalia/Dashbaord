import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from '../clients/clients.component';
import { EventListComponent } from '../events/event-list/event-list.component';
import { EventsComponent } from '../events/events.component';
import { ShopsComponent } from '../shops/shops.component';
import { StoresComponent } from '../stores/stores.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  {
    path: '',
    component: SidenavComponent,
    children: [
      { path: '', redirectTo: 'admin/event', pathMatch: 'full' },
      {
        path: 'event',
        component: EventsComponent
      },
      {
        path: 'shops',
        component: ShopsComponent
      },
      {
        path: 'store',
        component: StoresComponent
      },
      { path: "clients",
       component: ClientsComponent },
      
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
