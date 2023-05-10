import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersigninPage } from './customersignin.page';

const routes: Routes = [
  {
    path: '',
    component: CustomersigninPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersigninPageRoutingModule {}
