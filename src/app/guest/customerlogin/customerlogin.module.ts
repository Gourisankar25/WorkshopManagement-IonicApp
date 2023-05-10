import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerloginPageRoutingModule } from './customerlogin-routing.module';

import { CustomerloginPage } from './customerlogin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerloginPageRoutingModule
  ],
  declarations: [CustomerloginPage]
})
export class CustomerloginPageModule {}
