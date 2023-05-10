import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopforgotPage } from './shopforgot.page';

const routes: Routes = [
  {
    path: '',
    component: ShopforgotPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopforgotPageRoutingModule {}
