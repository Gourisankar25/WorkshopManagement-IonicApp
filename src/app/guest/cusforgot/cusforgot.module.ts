import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CusforgotPageRoutingModule } from './cusforgot-routing.module';

import { CusforgotPage } from './cusforgot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CusforgotPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CusforgotPage]
})
export class CusforgotPageModule {}
