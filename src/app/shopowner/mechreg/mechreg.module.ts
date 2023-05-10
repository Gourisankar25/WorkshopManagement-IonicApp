import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MechregPageRoutingModule } from './mechreg-routing.module';

import { MechregPage } from './mechreg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MechregPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [MechregPage]
})
export class MechregPageModule {}
