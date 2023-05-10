import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CusrequestviewmorePage } from './cusrequestviewmore.page';

const routes: Routes = [
  {
    path: '',
    component: CusrequestviewmorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CusrequestviewmorePageRoutingModule {}
