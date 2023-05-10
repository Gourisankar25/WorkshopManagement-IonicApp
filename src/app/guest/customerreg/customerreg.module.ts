import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerregPageRoutingModule } from './customerreg-routing.module';

import { CustomerregPage } from './customerreg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerregPageRoutingModule
  ],
  declarations: [CustomerregPage]
})
export class CustomerregPageModule {}
