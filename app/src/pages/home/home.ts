import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConsumoProvider } from '../../providers/consumo/consumo.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  consumoAtual: any = 2.4;
  today: any;
  connection: any;

  constructor(public navCtrl: NavController, private _service: ConsumoProvider) {
    //this.valores();
  }

  ionViewDidLoad() {
    this._service.startSocket().then(() => {
      this.connection = this._service.getConsumo().subscribe((data: any) => {
        this.consumoAtual = data.valor;
        this.today = data.hora.toString().replace(/,/ig,':'); 
      })
    });
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
