import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewmechanicdetailsPageRoutingModule } from './viewmechanicdetails-routing.module';

import { ViewmechanicdetailsPage } from './viewmechanicdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewmechanicdetailsPageRoutingModule
  ],
  declarations: [ViewmechanicdetailsPage]
})
export class ViewmechanicdetailsPageModule {}
