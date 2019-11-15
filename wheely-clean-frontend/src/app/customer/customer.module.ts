import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerRequestListComponent } from './pages/customer-request-list/customer-request-list.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ListItemComponent } from './components/list-item/list-item.component';
import { CustomerRequestCreateComponent } from './pages/customer-request-create/customer-request-create.component';




@NgModule({
  declarations: [CustomerRequestListComponent, ListItemComponent, CustomerRequestCreateComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatIconModule],
  exports: [CustomerRequestListComponent]
})
export class CustomerModule { }
