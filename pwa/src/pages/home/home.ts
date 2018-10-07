import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConsumoProvider } from '../../providers/consumo/consumo.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  consumoAtual: any = 0;
  today: any = Date.now();
  connection: any;

  constructor(public navCtrl: NavController, private _service: ConsumoProvider) {
    //this.valores();
  }

  ionViewDidLoad() {
    this._service.startSocket().then(() => {
      this.connection = this._service.getConsumo().subscribe((data: any) => {
        this.consumoAtual = data.valor;
        console.log(data);
      })
    })
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
