import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminRequestListComponent} from './pages/admin-request-list/admin-request-list.component';



const routes: Routes = [
    { path: 'admin', component: AdminRequestListComponent }
  ];
@NgModule({
  imports: [  RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
