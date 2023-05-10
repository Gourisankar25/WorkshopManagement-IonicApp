import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CusprofileeditPage } from './cusprofileedit.page';

const routes: Routes = [
  {
    path: '',
    component: CusprofileeditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CusprofileeditPageRoutingModule {}
