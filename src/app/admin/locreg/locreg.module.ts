import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocregPageRoutingModule } from './locreg-routing.module';

import { LocregPage } from './locreg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocregPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LocregPage]
})
export class LocregPageModule {}
