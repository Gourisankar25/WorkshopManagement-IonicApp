import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocviewPageRoutingModule } from './locview-routing.module';

import { LocviewPage } from './locview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocviewPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LocviewPage]
})
export class LocviewPageModule {}
