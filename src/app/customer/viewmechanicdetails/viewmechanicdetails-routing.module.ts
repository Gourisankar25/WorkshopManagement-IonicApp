import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewmechanicdetailsPage } from './viewmechanicdetails.page';

const routes: Routes = [
  {
    path: '',
    component: ViewmechanicdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewmechanicdetailsPageRoutingModule {}
