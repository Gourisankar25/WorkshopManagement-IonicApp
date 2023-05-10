import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RejectedrequestsPageRoutingModule } from './rejectedrequests-routing.module';

import { RejectedrequestsPage } from './rejectedrequests.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RejectedrequestsPageRoutingModule
  ],
  declarations: [RejectedrequestsPage]
})
export class RejectedrequestsPageModule {}
