import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MechanicreportPage } from './mechanicreport.page';

const routes: Routes = [
  {
    path: '',
    component: MechanicreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MechanicreportPageRoutingModule {}
