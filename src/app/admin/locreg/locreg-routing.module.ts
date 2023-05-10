import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocregPage } from './locreg.page';

const routes: Routes = [
  {
    path: '',
    component: LocregPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocregPageRoutingModule {}
