import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainProvider } from '../../providers/main/main';

/**
 * Generated class for the IncomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-income',
  templateUrl: 'income.html',
})
export class IncomePage {
  
  income = {
    type:'income',
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
    console.log('ionViewDidLoad IncomePage');
  }

  save(){
    this.main.saveToStorage(this.income);
    console.log('saved')
  }

}
