import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { UsuarioProvider } from '../../providers/usuario/usuario.service';

@Component({
  selector: 'page-change-password',
  templateUrl: 'change-password.html',
})
export class ChangePasswordPage {
  usuario: any;
  loading: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private service: UsuarioProvider,
    private authProvider: AuthServiceProvider,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
  ) {
  }

  ionViewDidLoad() {
  }

  changePassword() {
    this.presentLoading();

    if (this.usuario.senha != this.usuario.confirmarSenha) {
      this.loading.dismiss();
      return this.presentToast('Senhas não conferem');
    }

    Object.assign(this.usuario, this.authProvider.getUser());

    this.service.alterarSenha(this.usuario).then((data: any) => {
      this.loading.dismiss();
      this.navCtrl.setRoot(LoginPage);
      this.presentToast('Senha alterada com sucesso');
    }).catch((res: any) => {
      this.loading.dismiss();
      this.presentToast('Ocorreu um erro no servidor');
    });
  }

  presentToast(text: string) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000
    });
    toast.present();
  }

  presentLoading() {
    this.loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Aguarde...'
    });

    this.loading.present();
  }
}
