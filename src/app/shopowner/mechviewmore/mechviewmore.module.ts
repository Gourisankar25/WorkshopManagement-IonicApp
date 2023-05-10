import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MechviewmorePageRoutingModule } from './mechviewmore-routing.module';

import { MechviewmorePage } from './mechviewmore.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MechviewmorePageRoutingModule
  ],
  declarations: [MechviewmorePage]
})
export class MechviewmorePageModule {}
