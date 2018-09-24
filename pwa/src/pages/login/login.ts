import { Component } from '@angular/core';
import { NavController, ToastController, LoadingController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { HomePage } from '../home/home';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';
import { CadastrarUsuarioPage } from '../usuario/cadastrar/usuario-cadastrar';

@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
})
export class LoginPage {

	constructor(
		private navCtrl: NavController,
		private authService: AuthServiceProvider,
		private toastCtrl: ToastController,
		private loadingCtrl: LoadingController
	) { }

	loginData: any = {};
	loading: any;

	ionViewDidLoad() {
	}

	chamaTelaCadastro() {
		this.navCtrl.push(CadastrarUsuarioPage);
	}

	logar() {
		// this.presentLoading();

		// this.authService.logar(this.loginData).then((data: any) => {
		// 	this.authService.setUser(data.content.usuario);
		// 	this.authService.setToken(data.content.token);
		// 	this.navCtrl.setRoot(HomePage);
		// 	this.loading.dismiss();
		// }).catch((res: any) => {
		// 	this.loading.dismiss();
		// 	this.presentToast('Ocorreu um erro no servidor');
		// });
		this.navCtrl.setRoot(HomePage);
	}

	forgotPassword() {
		this.navCtrl.push(ForgotPasswordPage);
	}

	presentToast(text: string) {
		const toast = this.toastCtrl.create({
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