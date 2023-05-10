import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopcountreportPageRoutingModule } from './shopcountreport-routing.module';

import { ShopcountreportPage } from './shopcountreport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopcountreportPageRoutingModule
  ],
  declarations: [ShopcountreportPage]
})
export class ShopcountreportPageModule {}
