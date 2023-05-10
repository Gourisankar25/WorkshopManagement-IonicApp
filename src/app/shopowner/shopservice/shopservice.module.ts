import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopservicePageRoutingModule } from './shopservice-routing.module';

import { ShopservicePage } from './shopservice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopservicePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ShopservicePage]
})
export class ShopservicePageModule {}
