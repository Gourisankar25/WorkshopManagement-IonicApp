import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopcountreportPage } from './shopcountreport.page';

const routes: Routes = [
  {
    path: '',
    component: ShopcountreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopcountreportPageRoutingModule {}
