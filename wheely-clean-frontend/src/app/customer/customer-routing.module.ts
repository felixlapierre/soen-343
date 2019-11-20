import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';



const routes: Routes = [
    { path: 'customer', component: CustomerComponent }
  ];
@NgModule({
  imports: [  RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
