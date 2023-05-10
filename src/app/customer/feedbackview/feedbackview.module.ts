import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedbackviewPageRoutingModule } from './feedbackview-routing.module';

import { FeedbackviewPage } from './feedbackview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedbackviewPageRoutingModule
  ],
  declarations: [FeedbackviewPage]
})
export class FeedbackviewPageModule {}
