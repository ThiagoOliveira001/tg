import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { HomePage } from '../home/home';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public _authService: AuthServiceProvider,
    public toastCtrl: ToastController
  ) {}

  loginData: any = {};
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  logar() {
     this._authService.logar(this.loginData).then((data: any) => {
        this._authService.setUser(data.usuario);
        this._authService.setToken(data.token);
        this.navCtrl.setRoot(HomePage);
     }).catch((res:any) => {
      console.log('catch'); 
      this.presentToast(res.error.message);
     });
  }

  forgotPassword() {
    this.navCtrl.push(ForgotPasswordPage);
  }
//banana
  presentToast(msg: string) {
    const toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }
}
