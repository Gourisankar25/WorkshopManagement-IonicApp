import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopotpPage } from './shopotp.page';

const routes: Routes = [
  {
    path: '',
    component: ShopotpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopotpPageRoutingModule {}
