import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceeditPage } from './serviceedit.page';

const routes: Routes = [
  {
    path: '',
    component: ServiceeditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceeditPageRoutingModule {}
