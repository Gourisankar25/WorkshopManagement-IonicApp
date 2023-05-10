import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkshopviewPageRoutingModule } from './workshopview-routing.module';

import { WorkshopviewPage } from './workshopview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkshopviewPageRoutingModule
  ],
  declarations: [WorkshopviewPage]
})
export class WorkshopviewPageModule {}
