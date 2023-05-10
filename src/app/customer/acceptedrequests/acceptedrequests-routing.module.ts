import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcceptedrequestsPage } from './acceptedrequests.page';

const routes: Routes = [
  {
    path: '',
    component: AcceptedrequestsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcceptedrequestsPageRoutingModule {}
