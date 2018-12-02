import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainProvider } from '../../providers/main/main';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams,
  	public main:MainProvider) {
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  ionViewDidEnter(){
  	this.main.getAllList();
  }

/*
  getCategoryNameByValue(item){
  	let name;
  	if (item.type == "income"){
  		this.main.incomeCategory.forEach(category=>{
  			if(category.value == item.selectedCategory){
  				name = category.name;
  			}
  		});
  		return name;
  	} else {
  		this.main.outCategory.forEach(category=>{
  			if(category.value == item.selectedCategory){
  				name = category.name;
  			}
  		});
  		return name;
  	}
  }
  */

}
