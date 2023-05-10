import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopownerregPageRoutingModule } from './shopownerreg-routing.module';

import { ShopownerregPage } from './shopownerreg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopownerregPageRoutingModule,
    ReactiveFormsModule,
    
  ],
  declarations: [ShopownerregPage]
})
export class ShopownerregPageModule {}
