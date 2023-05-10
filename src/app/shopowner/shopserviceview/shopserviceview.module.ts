import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopserviceviewPageRoutingModule } from './shopserviceview-routing.module';

import { ShopserviceviewPage } from './shopserviceview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopserviceviewPageRoutingModule
  ],
  declarations: [ShopserviceviewPage]
})
export class ShopserviceviewPageModule {}
