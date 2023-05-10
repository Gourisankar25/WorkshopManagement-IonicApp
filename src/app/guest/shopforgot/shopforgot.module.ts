import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopforgotPageRoutingModule } from './shopforgot-routing.module';

import { ShopforgotPage } from './shopforgot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopforgotPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ShopforgotPage]
})
export class ShopforgotPageModule {}
