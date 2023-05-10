import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopdetailsreportPageRoutingModule } from './shopdetailsreport-routing.module';

import { ShopdetailsreportPage } from './shopdetailsreport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopdetailsreportPageRoutingModule
  ],
  declarations: [ShopdetailsreportPage]
})
export class ShopdetailsreportPageModule {}
