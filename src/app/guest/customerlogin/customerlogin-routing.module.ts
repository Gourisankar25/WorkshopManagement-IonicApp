import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerloginPage } from './customerlogin.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerloginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerloginPageRoutingModule {}
