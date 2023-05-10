import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MechviewPage } from './mechview.page';

const routes: Routes = [
  {
    path: '',
    component: MechviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MechviewPageRoutingModule {}
