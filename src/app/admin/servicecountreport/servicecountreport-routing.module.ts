import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicecountreportPage } from './servicecountreport.page';

const routes: Routes = [
  {
    path: '',
    component: ServicecountreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicecountreportPageRoutingModule {}
