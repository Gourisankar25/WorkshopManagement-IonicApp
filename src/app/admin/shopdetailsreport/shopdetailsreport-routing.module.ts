import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopdetailsreportPage } from './shopdetailsreport.page';

const routes: Routes = [
  {
    path: '',
    component: ShopdetailsreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopdetailsreportPageRoutingModule {}
