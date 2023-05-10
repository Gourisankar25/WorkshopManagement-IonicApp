import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerdetailsreportPage } from './customerdetailsreport.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerdetailsreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerdetailsreportPageRoutingModule {}
