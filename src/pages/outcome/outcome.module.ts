import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OutcomePage } from './outcome';

@NgModule({
  declarations: [
    OutcomePage,
  ],
  imports: [
    IonicPageModule.forChild(OutcomePage),
  ],
})
export class OutcomePageModule {}
