import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicecountreportPageRoutingModule } from './servicecountreport-routing.module';

import { ServicecountreportPage } from './servicecountreport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicecountreportPageRoutingModule
  ],
  declarations: [ServicecountreportPage]
})
export class ServicecountreportPageModule {}
