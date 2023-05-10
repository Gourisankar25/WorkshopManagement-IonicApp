import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MechanicreportPageRoutingModule } from './mechanicreport-routing.module';

import { MechanicreportPage } from './mechanicreport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MechanicreportPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [MechanicreportPage]
})
export class MechanicreportPageModule {}
