import { OrdersPage } from './../orders/orders';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})
export class HomePage {

  constructor(public navCtrl: NavController,private alertCtrl: AlertController) {
  }




  OrderAlert():void {

    const alert = this.alertCtrl.create({
      title: 'Welcome to Pogis Cupo Coffee Shop!',
      subTitle: 'Would you like to Order Here!',
      buttons: [
           {
        text: 'Orders',
        handler: data => {
        this.navCtrl.push(OrdersPage)

        }
      },
    ]
      
    });
    alert.present();
    
  
  }





  

}


