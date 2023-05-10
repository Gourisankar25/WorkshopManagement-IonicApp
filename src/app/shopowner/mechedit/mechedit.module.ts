import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MecheditPageRoutingModule } from './mechedit-routing.module';

import { MecheditPage } from './mechedit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MecheditPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [MecheditPage]
})
export class MecheditPageModule {}
