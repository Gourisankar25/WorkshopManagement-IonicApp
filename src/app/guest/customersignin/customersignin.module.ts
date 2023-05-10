import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomersigninPageRoutingModule } from './customersignin-routing.module';

import { CustomersigninPage } from './customersignin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomersigninPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CustomersigninPage]
})
export class CustomersigninPageModule {}
