import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopproeditPage } from './shopproedit.page';

const routes: Routes = [
  {
    path: '',
    component: ShopproeditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopproeditPageRoutingModule {}
