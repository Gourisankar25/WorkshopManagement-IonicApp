import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MecheditPage } from './mechedit.page';

const routes: Routes = [
  {
    path: '',
    component: MecheditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MecheditPageRoutingModule {}
