import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IncomePage } from '../income/income';
import { OutcomePage } from '../outcome/outcome';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  openIncomePage(){
  	this.navCtrl.push(IncomePage);

  }
  openOutcomePage(){
  	this.navCtrl.push(OutcomePage);
  }

}
