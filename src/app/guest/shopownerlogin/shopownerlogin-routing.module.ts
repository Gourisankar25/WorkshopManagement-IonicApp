import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopownerloginPage } from './shopownerlogin.page';

const routes: Routes = [
  {
    path: '',
    component: ShopownerloginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopownerloginPageRoutingModule {}
