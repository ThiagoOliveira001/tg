import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the ForgotPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({ 
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {
  email: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private _service: AuthServiceProvider,
    private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
  }

  forgotPassword() {
    console.log(this.email);
    this._service.forgotPassword(this.email).then((data: any) => {
      this.presentToast(data.message);
    }).catch((res: any) => {
      this.presentToast(res.error.message);
    });
  }

  presentToast(text: string) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000
    });
    toast.present();
  }
}
