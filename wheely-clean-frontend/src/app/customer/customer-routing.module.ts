import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerRequestListComponent } from './pages/customer-request-list/customer-request-list.component';



const routes: Routes = [
    { path: 'customer', component: CustomerRequestListComponent }
  ];
@NgModule({
  imports: [  RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
