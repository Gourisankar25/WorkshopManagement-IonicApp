import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopownerloginPageRoutingModule } from './shopownerlogin-routing.module';

import { ShopownerloginPage } from './shopownerlogin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopownerloginPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ShopownerloginPage]
})
export class ShopownerloginPageModule {}
