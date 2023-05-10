import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyprofileeditPageRoutingModule } from './myprofileedit-routing.module';

import { MyprofileeditPage } from './myprofileedit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyprofileeditPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [MyprofileeditPage]
})
export class MyprofileeditPageModule {}
