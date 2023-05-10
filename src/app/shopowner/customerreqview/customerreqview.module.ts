import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerreqviewPageRoutingModule } from './customerreqview-routing.module';

import { CustomerreqviewPage } from './customerreqview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerreqviewPageRoutingModule
  ],
  declarations: [CustomerreqviewPage]
})
export class CustomerreqviewPageModule {}
