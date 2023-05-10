import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestreportPage } from './requestreport.page';

const routes: Routes = [
  {
    path: '',
    component: RequestreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestreportPageRoutingModule {}
