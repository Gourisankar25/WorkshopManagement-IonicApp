import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerprofileeditPage } from './customerprofileedit.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerprofileeditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerprofileeditPageRoutingModule {}
