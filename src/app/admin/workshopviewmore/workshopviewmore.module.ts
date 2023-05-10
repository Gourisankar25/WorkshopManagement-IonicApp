import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkshopviewmorePageRoutingModule } from './workshopviewmore-routing.module';

import { WorkshopviewmorePage } from './workshopviewmore.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkshopviewmorePageRoutingModule,
  ],
  declarations: [WorkshopviewmorePage]
})
export class WorkshopviewmorePageModule {}
