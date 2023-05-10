import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerdetailsreportPageRoutingModule } from './customerdetailsreport-routing.module';

import { CustomerdetailsreportPage } from './customerdetailsreport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerdetailsreportPageRoutingModule
  ],
  declarations: [CustomerdetailsreportPage]
})
export class CustomerdetailsreportPageModule {}
