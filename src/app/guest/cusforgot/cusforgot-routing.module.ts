import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CusforgotPage } from './cusforgot.page';

const routes: Routes = [
  {
    path: '',
    component: CusforgotPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CusforgotPageRoutingModule {}
