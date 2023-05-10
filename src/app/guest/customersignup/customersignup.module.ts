import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomersignupPageRoutingModule } from './customersignup-routing.module';

import { CustomersignupPage } from './customersignup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomersignupPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CustomersignupPage]
})
export class CustomersignupPageModule {}
