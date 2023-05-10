import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestreportPageRoutingModule } from './requestreport-routing.module';

import { RequestreportPage } from './requestreport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestreportPageRoutingModule,
    ReactiveFormsModule
    
  ],
  declarations: [RequestreportPage]
})
export class RequestreportPageModule {}
