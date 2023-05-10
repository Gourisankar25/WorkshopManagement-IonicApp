import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopownerregPage } from './shopownerreg.page';

const routes: Routes = [
  {
    path: '',
    component: ShopownerregPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopownerregPageRoutingModule {}
