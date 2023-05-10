import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CusrequestviewmorePageRoutingModule } from './cusrequestviewmore-routing.module';

import { CusrequestviewmorePage } from './cusrequestviewmore.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CusrequestviewmorePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CusrequestviewmorePage]
})
export class CusrequestviewmorePageModule {}
