import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopwiseserviceviewPage } from './shopwiseserviceview.page';

const routes: Routes = [
  {
    path: '',
    component: ShopwiseserviceviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopwiseserviceviewPageRoutingModule {}
