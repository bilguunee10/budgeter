import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainProvider } from '../../providers/main/main';

/**
 * Generated class for the OutcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-outcome',
  templateUrl: 'outcome.html',
})
export class OutcomePage {

  outcome = {
    type:'outcome',
    description:null,
    date:null,
    amount:null,
    selectedCategory:null,
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public main:MainProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OutcomePage');
  }

  save(){
    this.main.saveToStorage(this.outcome);
    console.log('saved')
  }

}
