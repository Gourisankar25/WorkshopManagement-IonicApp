import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerreqviewPage } from './customerreqview.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerreqviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerreqviewPageRoutingModule {}
