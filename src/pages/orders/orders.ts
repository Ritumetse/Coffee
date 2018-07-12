import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the OrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html',
})
export class OrdersPage {
  order =0;


  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController) {
  }
  Exit() {
    const alert = this.alertCtrl.create({
      title: 'Hope you enjoyed your Coffee',
      subTitle: 'Thank you !',
      buttons: ['OK']
    });
    alert.present();
  }
  
Ording(value:number):void{
  this.order+= value;

}

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrdersPage');
  }

  name:string;
  Cappuino=false;
  icedCoffee= false;
  Tea= false;


  Price = 24.00;
  PriceicedCoffee= 25.50;
  PriceTe= 23.00;
  Total=0.0;


  PriceList():void{
    this.CalPrice();

  }
  CalPrice():number {
if (this.Cappuino && this.icedCoffee && this.Tea)
this.Total= (this.Price + this.PriceicedCoffee + this.PriceTe)*this.order;

else if (this.Cappuino && this.icedCoffee)
this.Total =(this.Price + this.PriceicedCoffee);

    else if(this.Cappuino){
      this.Total=this.Price*this.order;
    }
    else if(this.icedCoffee){
      this.Total=(this.PriceicedCoffee)*this.order;
    }
    else if (this.Tea){
      this.Total=( this.PriceTe)*this.order;
    }
  

return this.Total;

  }
  Clear(value:number):void{
    this.order=0;
    this.Total = 0;


  }

  
}
