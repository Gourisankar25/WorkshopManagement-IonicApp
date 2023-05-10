import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopserviceviewPage } from './shopserviceview.page';

const routes: Routes = [
  {
    path: '',
    component: ShopserviceviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopserviceviewPageRoutingModule {}
