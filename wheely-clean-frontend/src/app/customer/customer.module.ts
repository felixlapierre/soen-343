import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerRequestListComponent } from './pages/customer-request-list/customer-request-list.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { ListItemComponent } from './components/list-item/list-item.component';




@NgModule({
  declarations: [CustomerRequestListComponent, ListItemComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule],
  exports: [CustomerRequestListComponent]
})
export class CustomerModule { }
