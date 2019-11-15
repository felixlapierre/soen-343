import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerRequestListComponent } from './pages/customer-request-list/customer-request-list.component';



@NgModule({
  declarations: [CustomerRequestListComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule  ],
  exports: [CustomerRequestListComponent ]
})
export class CustomerModule { }
