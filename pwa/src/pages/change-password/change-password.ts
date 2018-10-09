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
   usuario: any = {};
   loading: any;
   oldPasswordType: String = 'password';
   oldPasswordIcon: String = 'eye';
   newPasswordType: String = 'password';
   newPasswordIcon: String = 'eye';
   confirmPasswordType: String = 'password';
   confirmPasswordIcon: String = 'eye';

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

   showHideOldPass() {
      this.oldPasswordType = this.oldPasswordType === 'text' ? 'password' : 'text';
      this.oldPasswordIcon = this.oldPasswordIcon === 'eye-off' ? 'eye' : 'eye-off';
   }

   showHideNewPass() {
      this.newPasswordType = this.newPasswordType === 'text' ? 'password' : 'text';
      this.newPasswordIcon = this.newPasswordIcon === 'eye-off' ? 'eye' : 'eye-off';
   }

   showHideConfirmPass() {
      this.confirmPasswordType = this.confirmPasswordType === 'text' ? 'password' : 'text';
      this.confirmPasswordIcon = this.confirmPasswordIcon === 'eye-off' ? 'eye' : 'eye-off';
   }

   changePassword() {
      this.presentLoading();

      if (this.usuario.novaSenha != this.usuario.confirmarSenha) {
         this.loading.dismiss();
         return this.presentToast('Senhas não conferem');
      }

      Object.assign(this.usuario, this.authProvider.getUser());

      this.service.alterarSenha(this.usuario).then(() => {
         this.loading.dismiss();
         this.navCtrl.setRoot(LoginPage);
         this.presentToast('Senha alterada com sucesso');
      }).catch((res: any) => {
         this.loading.dismiss();
         this.handlerError(res);
      });
   }

   handlerError(res) {
      switch (res.status) {

         case 401:
            this.presentToast('Senha antiga não compativel');
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
}
