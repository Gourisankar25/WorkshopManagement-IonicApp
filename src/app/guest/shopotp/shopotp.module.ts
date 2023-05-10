import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopotpPageRoutingModule } from './shopotp-routing.module';

import { ShopotpPage } from './shopotp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopotpPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ShopotpPage]
})
export class ShopotpPageModule {}
