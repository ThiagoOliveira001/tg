import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the CadastroUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-usuario',
  templateUrl: 'cadastro-usuario.html',
})
export class CadastroUsuarioPage {
  usuario: any = {}; 
  tipoPessoa: string;
  dataMaxima:string = `${ new Date().getFullYear() - 18}-${ new Date().getMonth() + 1 }-${ new Date().getDate() }`;
  confirma: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _service: AuthServiceProvider,
    private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
  }

  cadastrar() {
    if (this.usuario.email != this.confirma.email) {
      return this.presentToast('Email não confirmado');     
    } else if(this.usuario.senha != this.confirma.senha) {
      return this.presentToast('Senha não confirmada');
    }
    console.log(this.usuario);
    this._service.cadastrarUsuario(this.usuario).then((data: any) => {
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
