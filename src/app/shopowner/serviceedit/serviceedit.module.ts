import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceeditPageRoutingModule } from './serviceedit-routing.module';

import { ServiceeditPage } from './serviceedit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiceeditPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ServiceeditPage]
})
export class ServiceeditPageModule {}
