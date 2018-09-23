import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  consumoAtual: any = 0;
  today: any = Date.now();


  constructor(public navCtrl: NavController) {
    this.valores();
  }

  valores() {
    setInterval(() => {
      this.consumoAtual = (Math.random() * (100 - 1) + 1).toFixed(2);
    }, 1000);
    setInterval(() => {
      this.today = Date.now();
    }, 1000);
  }

}
