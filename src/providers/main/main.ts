import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MainProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MainProvider {
  incomeCategory = [
    {name:"цалин", value:'salary'},
    {name:"Бонус", value:'bonus'},
    {name:"хадгаламж хүү", value:'savings'},
    {name:"Бусад", value:'others'}
  ]

  outCategory = [
    {name:"Байрны мөнгө", value:'household'},
    {name:"Хүнс", value:'grocery'},
    {name:"Хоол", value:'lunch'},
    {name:"Боловсрол", value:'edu'},
    {name:"Унаа", value:'transport'},
    {name:"Pet", value:'pet'},
    {name:"Бусад", value:'others'}
  ]

  constructor(public http: HttpClient) {
    console.log('Hello MainProvider Provider');
  }
  
  saveToStorage(data){
    if(localStorage.getItem('budgetData')){
      let oldData = JSON.parse(localStorage.getItem('budgetData'));
      oldData.push(data);
      localStorage.setItem('budgetData',JSON.stringify(oldData));
    } else {
      localStorage.setItem('budgetData',JSON.stringify([data]));
    }
  }

}
