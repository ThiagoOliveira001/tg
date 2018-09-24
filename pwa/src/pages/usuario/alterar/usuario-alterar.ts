import { Component } from '@angular/core';
import { NavController, ToastController, LoadingController, ModalController } from 'ionic-angular';
import { UsuarioProvider } from '../../../providers/usuario/usuario.service';
import { AuthServiceProvider } from '../../../providers/auth-service/auth-service';
import { HomePage } from '../../home/home';
import { InvalidParametersPage } from '../../invalid-parameters/invalid-parameters';

@Component({
  selector: 'page-usuario-alterar',
  templateUrl: 'usuario-alterar.html',
})
export class AlterarUsuarioPage {

  usuario: any = {};
  dataMaximaPessoaFisica: string = `${new Date().getFullYear() - 18}-${new Date().getMonth() + 1}-${new Date().getDate()}`;
  dataAtual: String = new Date().toLocaleDateString();
  loading: any;
  modal: any;

  constructor(
    private navCtrl: NavController,
    private service: UsuarioProvider,
    private authService: AuthServiceProvider,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController
  ) { }

  ionViewDidLoad() {
    this.buscar();
  }

  buscar() {
    this.presentLoading();

    let user = this.authService.getUser();

    this.service.buscar(user.id).subscribe((data: any) => {
      this.usuario = data.content;
      this.loading.dismiss();
    }, (res) => {
      this.loading.dismiss();
      this.presentToast('Ocorreu um erro no servidor');
    });
  }

  alterar() {
    this.presentLoading();

    this.service.alterar(this.usuario).then((data: any) => {
      this.loading.dismiss();
      this.presentToast('Alterado com Sucesso');
    }).catch((res: any) => {
      this.loading.dismiss();
      this.handlerError(res);
    });
  }

  goBack() {
    this.navCtrl.setRoot(HomePage);
  }

  handlerError(res) {
    switch (res.status) {

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
