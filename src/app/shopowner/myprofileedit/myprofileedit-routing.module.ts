import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyprofileeditPage } from './myprofileedit.page';

const routes: Routes = [
  {
    path: '',
    component: MyprofileeditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyprofileeditPageRoutingModule {}
