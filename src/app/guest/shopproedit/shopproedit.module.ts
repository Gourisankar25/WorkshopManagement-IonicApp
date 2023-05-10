import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopproeditPageRoutingModule } from './shopproedit-routing.module';

import { ShopproeditPage } from './shopproedit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopproeditPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ShopproeditPage]
})
export class ShopproeditPageModule {}
