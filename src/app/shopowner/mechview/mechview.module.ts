import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MechviewPageRoutingModule } from './mechview-routing.module';

import { MechviewPage } from './mechview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MechviewPageRoutingModule
  ],
  declarations: [MechviewPage]
})
export class MechviewPageModule {}
