import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceviewmorePageRoutingModule } from './serviceviewmore-routing.module';

import { ServiceviewmorePage } from './serviceviewmore.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiceviewmorePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ServiceviewmorePage]
})
export class ServiceviewmorePageModule {}
