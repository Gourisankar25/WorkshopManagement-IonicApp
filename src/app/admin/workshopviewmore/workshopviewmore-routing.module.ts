import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkshopviewmorePage } from './workshopviewmore.page';

const routes: Routes = [
  {
    path: '',
    component: WorkshopviewmorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkshopviewmorePageRoutingModule {}
