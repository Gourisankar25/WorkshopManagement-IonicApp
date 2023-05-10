import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopwiseserviceviewPageRoutingModule } from './shopwiseserviceview-routing.module';

import { ShopwiseserviceviewPage } from './shopwiseserviceview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopwiseserviceviewPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ShopwiseserviceviewPage]
})
export class ShopwiseserviceviewPageModule {}
