import { Component } from '@angular/core';
import { NavController, ToastController, LoadingController, ModalController } from 'ionic-angular';
import { UsuarioProvider } from '../../../providers/usuario/usuario.service';
import { LoginPage } from '../../login/login';
import { InvalidParametersPage } from '../../invalid-parameters/invalid-parameters';

@Component({
   selector: 'page-usuario-cadastrar',
   templateUrl: 'usuario-cadastrar.html',
})
export class CadastrarUsuarioPage {
   
   usuario: any = {
      tipoPessoa: 'F'
   };
   dataMaxima: string = `${new Date().getFullYear() - 18}-${new Date().getMonth() + 1}-${new Date().getDate()}`;
   loading: any;
   modal: any;

   constructor(
      private navCtrl: NavController,
      private service: UsuarioProvider,
      private toastCtrl: ToastController,
      private loadingCtrl: LoadingController,
      private modalCtrl: ModalController
   ) { }


   ionViewDidLoad() {
   }

   cadastrar() {
      this.presentLoading();

      if (this.usuario.email != this.usuario.confirmarEmail) {
         this.loading.dismiss();
         return this.presentToast('Emails não conferem');
      } else if (this.usuario.senha != this.usuario.confirmarSenha) {
         this.loading.dismiss();
         return this.presentToast('Senhas não conferem');
      }

      this.service.cadastrar(this.usuario).then((data: any) => {
         this.loading.dismiss();
         this.presentToast(data.message);
         this.navCtrl.setRoot(LoginPage);
      }).catch((res: any) => {
         this.loading.dismiss();
         this.handlerError(res);
      });
   }

   handlerError(res) {
      switch(res.status) {

         case 400:
            this.presentModal(res.error.message);
            break;

         default:
            this.presentToast('Ocorreu um erro no servidor');
            break;
      }
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

   presentModal(errors) {
      this.modal = this.modalCtrl.create(InvalidParametersPage, { errors });
      this.modal.present();
   }
}
