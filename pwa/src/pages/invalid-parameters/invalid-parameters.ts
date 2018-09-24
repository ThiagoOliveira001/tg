import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({ 
  selector: 'page-invalid-parameters',
  templateUrl: 'invalid-parameters.html',
})
export class InvalidParametersPage {

  invalidParameters: any;

  constructor(
    private viewCtrl: ViewController,
    private navParams: NavParams
  ) { 
    this.invalidParameters = this.navParams.get('errors');
  }

  ionViewDidLoad() {
  }

  goBack() {
    this.viewCtrl.dismiss();
  }

}
