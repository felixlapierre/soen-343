import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CleanerRequestListComponent } from './pages/cleaner-request-list/cleaner-request-list.component';



const routes: Routes = [
    { path: 'cleaner', component: CleanerRequestListComponent }
  ];
@NgModule({
  imports: [  RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CleanerRoutingModule { }
