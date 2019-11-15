import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CleanerRoutingModule } from './cleaner-routing.module';
import { CleanerRequestListComponent } from './pages/cleaner-request-list/cleaner-request-list.component';



@NgModule({
  declarations: [ CleanerRequestListComponent],
  imports: [
    CommonModule,
    CleanerRoutingModule
  ],
  exports: [ ]

})
export class CleanerModule { }
