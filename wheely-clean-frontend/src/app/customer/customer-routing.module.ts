import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerRequestListComponent } from './pages/customer-request-list/customer-request-list.component';
import { CustomerRequestCreateComponent } from './pages/customer-request-create/customer-request-create.component';

const routes: Routes = [
    { path: 'customer', component: CustomerRequestListComponent },
    { path: 'create-request', component: CustomerRequestCreateComponent }
  ];
@NgModule({
  imports: [  RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
