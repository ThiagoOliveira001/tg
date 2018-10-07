import { Component } from '@angular/core';
import { ToastController, LoadingController } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario.service';

@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})

export class ForgotPasswordPage {
  email: string = "moreira.g.thiago@gmail.com";
  loading: any;

  constructor(
    private service: UsuarioProvider,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
  ) { }

  ionViewDidLoad() {
  }

  esqueceuSenha() {
    this.presentLoading();

    this.service.esqueceuSenha(this.email).then(() => {
      this.loading.dismiss();
      this.presentToast('Email enviado');
    }).catch((res: any) => {
      this.loading.dismiss();
      this.presentToast('Ocorreu um erro no servidor');
    });
  }

  presentLoading() {
    this.loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Aguarde...'
    });

    this.loading.present();
  }

  presentToast(text: string) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000
    });

    toast.present();
  }
}
