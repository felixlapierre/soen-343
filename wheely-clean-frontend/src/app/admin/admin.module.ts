import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminRequestListComponent } from './pages/admin-request-list/admin-request-list.component';



@NgModule({
  declarations: [AdminRequestListComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
