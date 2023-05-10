import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CusprofileeditPageRoutingModule } from './cusprofileedit-routing.module';

import { CusprofileeditPage } from './cusprofileedit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CusprofileeditPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CusprofileeditPage]
})
export class CusprofileeditPageModule {}
