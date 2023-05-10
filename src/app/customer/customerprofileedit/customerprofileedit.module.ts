import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerprofileeditPageRoutingModule } from './customerprofileedit-routing.module';

import { CustomerprofileeditPage } from './customerprofileedit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerprofileeditPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CustomerprofileeditPage]
})
export class CustomerprofileeditPageModule {}
