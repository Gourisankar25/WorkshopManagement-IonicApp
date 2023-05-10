import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkshopviewPage } from './workshopview.page';

const routes: Routes = [
  {
    path: '',
    component: WorkshopviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkshopviewPageRoutingModule {}
