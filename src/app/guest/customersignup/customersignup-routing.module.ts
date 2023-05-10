import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersignupPage } from './customersignup.page';

const routes: Routes = [
  {
    path: '',
    component: CustomersignupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersignupPageRoutingModule {}
