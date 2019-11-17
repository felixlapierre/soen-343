import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CleanerRoutingModule } from './cleaner-routing.module';
import { CleanerRequestListComponent } from './pages/cleaner-request-list/cleaner-request-list.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [ CleanerRequestListComponent],
  imports: [
    CommonModule,
    CleanerRoutingModule,
    MatButtonModule
  ],
  exports: [ ]

})
export class CleanerModule { }
