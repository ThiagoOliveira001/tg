import { Component } from '@angular/core';
import { NavController, ToastController, LoadingController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { HomePage } from '../home/home';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';
import { CadastrarUsuarioPage } from '../usuario/cadastrar/usuario-cadastrar';
import { ChangePasswordPage } from '../change-password/change-password';

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
	passwordType: String = 'password';
	passwordIcon: String = 'eye';

	ionViewDidLoad() {
	}

	chamaTelaCadastro() {
		this.navCtrl.push(CadastrarUsuarioPage);
	}

	showHidePass() {
		this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
		this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
	}

	logar() {
		this.presentLoading();

		this.authService.logar(this.loginData).then((data: any) => {
			this.authService.setUser(data.content.usuario);
			this.authService.setToken(data.content.token);
			this.navCtrl.setRoot(HomePage);
			this.loading.dismiss();
		}).catch((res: any) => {
			this.loading.dismiss();
			this.handlerError(res);
		});

		// this.navCtrl.setRoot(HomePage);
	}

	forgotPassword() {
		this.navCtrl.push(ForgotPasswordPage);
	}

	handlerError(res) {
		switch (res.status) {

			case 401:
				this.authService.setUser(res.error.content);
				this.navCtrl.push(ChangePasswordPage);
				break;

			case 404:
				this.presentToast('Usuario e/ou senha inválidos');
				break;

			default:
				this.presentToast('Ocorreu um erro no servidor');
				break;
		}
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