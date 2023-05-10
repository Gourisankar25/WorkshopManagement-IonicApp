import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopservicePage } from './shopservice.page';

const routes: Routes = [
  {
    path: '',
    component: ShopservicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopservicePageRoutingModule {}
