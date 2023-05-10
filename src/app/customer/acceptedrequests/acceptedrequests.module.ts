import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcceptedrequestsPageRoutingModule } from './acceptedrequests-routing.module';

import { AcceptedrequestsPage } from './acceptedrequests.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcceptedrequestsPageRoutingModule
  ],
  declarations: [AcceptedrequestsPage]
})
export class AcceptedrequestsPageModule {}
