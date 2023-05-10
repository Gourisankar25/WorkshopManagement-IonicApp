import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocviewPage } from './locview.page';

const routes: Routes = [
  {
    path: '',
    component: LocviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocviewPageRoutingModule {}
