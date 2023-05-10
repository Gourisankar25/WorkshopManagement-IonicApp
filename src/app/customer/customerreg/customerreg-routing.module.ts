import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerregPage } from './customerreg.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerregPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerregPageRoutingModule {}
