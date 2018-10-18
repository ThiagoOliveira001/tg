webpackJsonp([0],{

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsumoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environment_environment__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConsumoProvider = /** @class */ (function () {
    function ConsumoProvider(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    ConsumoProvider.prototype.startSocket = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get('usuario').then(function (user) {
                _this.socket = __WEBPACK_IMPORTED_MODULE_3_socket_io_client__(__WEBPACK_IMPORTED_MODULE_2__environment_environment__["a" /* ENVIRONMENT */].urlApi, { query: { id: user.id } });
                resolve();
            }).catch(function (error) {
                reject();
            });
        });
    };
    ConsumoProvider.prototype.getConsumo = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"](function (observer) {
            _this.socket.on('consumo-novo', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    ConsumoProvider.prototype.getConsumoOf = function (filtro) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"]
            .fromPromise(this.storage.get('usuario'))
            .flatMap(function (user) {
            return _this.http.get(__WEBPACK_IMPORTED_MODULE_2__environment_environment__["a" /* ENVIRONMENT */].urlApi + "/api/consumo/" + user.id, { params: { inicio: filtro.dataInicial, fim: filtro.dataFinal } });
        });
    };
    ConsumoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]) === "function" && _b || Object])
    ], ConsumoProvider);
    return ConsumoProvider;
    var _a, _b;
}());

//# sourceMappingURL=consumo.service.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvalidParametersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InvalidParametersPage = /** @class */ (function () {
    function InvalidParametersPage(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.invalidParameters = this.navParams.get('errors');
    }
    InvalidParametersPage.prototype.ionViewDidLoad = function () {
    };
    InvalidParametersPage.prototype.goBack = function () {
        this.viewCtrl.dismiss();
    };
    InvalidParametersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-invalid-parameters',template:/*ion-inline-start:"C:\trabalho-graduacao\pwa\src\pages\invalid-parameters\invalid-parameters.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>Campos Inválidos</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n      <ion-item *ngFor="let item of invalidParameters">\n\n        <ion-label>{{ item }}</ion-label>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <button (click)="goBack()" ion-button block>\n\n          VOLTAR\n\n        </button>\n\n      </ion-item>\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\trabalho-graduacao\pwa\src\pages\invalid-parameters\invalid-parameters.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], InvalidParametersPage);
    return InvalidParametersPage;
}());

//# sourceMappingURL=invalid-parameters.js.map

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 177;

/***/ }),

/***/ 221:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 221;

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastrarUsuarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_usuario_usuario_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__invalid_parameters_invalid_parameters__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CadastrarUsuarioPage = /** @class */ (function () {
    function CadastrarUsuarioPage(navCtrl, service, toastCtrl, loadingCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.usuario = {
            tipoPessoa: 'F'
        };
        this.dataAtual = new Date();
    }
    CadastrarUsuarioPage.prototype.ionViewDidLoad = function () {
    };
    CadastrarUsuarioPage.prototype.setDataMinima = function () {
        if (this.usuario.tipoPessoa == 'F')
            this.dataMinima = "" + (this.dataAtual.getFullYear() - 18);
        else
            this.dataMinima = "" + this.dataAtual.getFullYear();
    };
    CadastrarUsuarioPage.prototype.cadastrar = function () {
        var _this = this;
        this.presentLoading();
        if (this.usuario.email != this.usuario.confirmarEmail) {
            this.loading.dismiss();
            return this.presentToast('Emails não conferem');
        }
        else if (this.usuario.senha != this.usuario.confirmarSenha) {
            this.loading.dismiss();
            return this.presentToast('Senhas não conferem');
        }
        this.service.cadastrar(this.usuario).then(function (data) {
            _this.loading.dismiss();
            _this.presentToast(data.message);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        }).catch(function (res) {
            _this.loading.dismiss();
            _this.handlerError(res);
        });
    };
    CadastrarUsuarioPage.prototype.handlerError = function (res) {
        switch (res.status) {
            case 400:
                this.presentModal(res.error.message);
                break;
            default:
                this.presentToast('Ocorreu um erro no servidor');
                break;
        }
    };
    CadastrarUsuarioPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000
        });
        toast.present();
    };
    CadastrarUsuarioPage.prototype.presentLoading = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Aguarde...'
        });
        this.loading.present();
    };
    CadastrarUsuarioPage.prototype.presentModal = function (errors) {
        this.modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__invalid_parameters_invalid_parameters__["a" /* InvalidParametersPage */], { errors: errors });
        this.modal.present();
    };
    CadastrarUsuarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-usuario-cadastrar',template:/*ion-inline-start:"C:\trabalho-graduacao\pwa\src\pages\usuario\cadastrar\usuario-cadastrar.html"*/'<ion-header>\n\n   <ion-navbar color="primary">\n\n      <ion-title>Cadastrar Usuario</ion-title>\n\n   </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n   <ion-list>\n\n      <form #usuarioForm="ngForm" (ngSubmit)="cadastrar()">\n\n         <ion-item>\n\n            <ion-label>Tipo Pessoa</ion-label>\n\n            <ion-select id="select-pessoa" name="tipoPessoa" [(ngModel)]="usuario.tipoPessoa" (ngModelChange)="setDataMaxima()" required>\n\n               <ion-option value="F">Fisica</ion-option>\n\n               <ion-option value="J">Juridica</ion-option>\n\n            </ion-select>\n\n         </ion-item>\n\n\n\n         <ion-item>\n\n            <ion-label *ngIf="usuario.tipoPessoa == \'F\'" floating>Nome</ion-label>\n\n            <ion-label *ngIf="usuario.tipoPessoa == \'J\'" floating>Razão Social</ion-label>\n\n            <ion-input type="text" name="nomeRazaoSocial" [(ngModel)]="usuario.nomeRazaoSocial" required></ion-input>\n\n         </ion-item>\n\n\n\n         <ion-item>\n\n            <ion-label *ngIf="usuario.tipoPessoa == \'F\'" floating>Sobrenome</ion-label>\n\n            <ion-label *ngIf="usuario.tipoPessoa == \'J\'" floating>Nome Fantasia</ion-label>\n\n            <ion-input type="text" name="sobrenomeFantasia" [(ngModel)]="usuario.sobrenomeFantasia" required></ion-input>\n\n         </ion-item>\n\n\n\n         <ion-item>\n\n            <ion-label *ngIf="usuario.tipoPessoa == \'F\'" floating>CPF</ion-label>\n\n            <ion-label *ngIf="usuario.tipoPessoa == \'J\'" floating>CNPJ</ion-label>\n\n            <ion-input type="text" name="cpfCnpj" [(ngModel)]="usuario.cpfCnpj" required></ion-input>\n\n         </ion-item>\n\n\n\n         <ion-item>\n\n            <ion-label *ngIf="usuario.tipoPessoa == \'F\'" floating>RG</ion-label>\n\n            <ion-label *ngIf="usuario.tipoPessoa == \'J\'" floating>Inscricao Estadual</ion-label>\n\n            <ion-input type="text" name="rgInscricaoEstadual" [(ngModel)]="usuario.rgInscricaoEstadual" required></ion-input>\n\n         </ion-item>\n\n\n\n         <ion-item>\n\n            <ion-label floating>Senha</ion-label>\n\n            <ion-input type="password" name="senha" [(ngModel)]="usuario.senha" required></ion-input>\n\n         </ion-item>\n\n\n\n         <ion-item>\n\n            <ion-label floating>Confirmar Senha</ion-label>\n\n            <ion-input type="password" name="confirmarSenha" [(ngModel)]="usuario.confirmarSenha" required></ion-input>\n\n         </ion-item>\n\n\n\n         <ion-item>\n\n            <ion-label floating>Email</ion-label>\n\n            <ion-input type="email" name="email" [(ngModel)]="usuario.email" required></ion-input>\n\n         </ion-item>\n\n\n\n         <ion-item>\n\n            <ion-label floating>Confirmar Email</ion-label>\n\n            <ion-input type="email" name="confirmarEmail" [(ngModel)]="usuario.confirmarEmail" required></ion-input>\n\n         </ion-item>\n\n\n\n         <ion-item style="margin-top: 20px;">\n\n            <ion-label *ngIf="usuario.tipoPessoa == \'F\'">Data de Nascimento</ion-label>\n\n            <ion-label *ngIf="usuario.tipoPessoa == \'J\'">Data de Constituicao</ion-label>\n\n            <ion-datetime [min]="usuario.tipoPessoa == \'F\' ? \'1940\' : \'2000\'" [max]="usuario.tipoPessoa == \'F\' ? \'2000\' : \'1940\'"\n\n               displayFormat="DD/MM/YYYY" max="dataMaxima" name="dataNascimentoConstituicao" [(ngModel)]="usuario.dataNascimentoConstituicao"></ion-datetime>\n\n         </ion-item>\n\n\n\n         <!-- <button type="submit" ion-button block>SALVAR</button> -->\n\n         <button [disabled]="!usuarioForm.form.valid" type="submit" ion-button block>SALVAR</button>\n\n      </form>\n\n   </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\trabalho-graduacao\pwa\src\pages\usuario\cadastrar\usuario-cadastrar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_usuario_usuario_service__["a" /* UsuarioProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], CadastrarUsuarioPage);
    return CadastrarUsuarioPage;
}());

//# sourceMappingURL=usuario-cadastrar.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_usuario_usuario_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgotPasswordPage = /** @class */ (function () {
    function ForgotPasswordPage(service, authServiceProvider, toastCtrl, loadingCtrl) {
        this.service = service;
        this.authServiceProvider = authServiceProvider;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    ForgotPasswordPage.prototype.ionViewDidLoad = function () {
    };
    ForgotPasswordPage.prototype.esqueceuSenha = function () {
        var _this = this;
        this.presentLoading();
        var user = this.authServiceProvider.getUser();
        this.service.esqueceuSenha(user.id, this.email).then(function () {
            _this.loading.dismiss();
            _this.presentToast('Email enviado');
        }).catch(function (res) {
            _this.loading.dismiss();
            _this.presentToast('Ocorreu um erro no servidor');
        });
    };
    ForgotPasswordPage.prototype.presentLoading = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Aguarde...'
        });
        this.loading.present();
    };
    ForgotPasswordPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000
        });
        toast.present();
    };
    ForgotPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgot-password',template:/*ion-inline-start:"C:\trabalho-graduacao\pwa\src\pages\forgot-password\forgot-password.html"*/'<ion-header>\n\n   <ion-navbar color="primary">\n\n      <ion-title>Recuperação de Senha</ion-title>\n\n   </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n   <ion-list>\n\n      <form #enviarEmailForm="ngForm" (ngSubmit)="forgotPassword()">\n\n         <ion-item>\n\n            <ion-label floating>E-mail</ion-label>\n\n            <ion-input [(ngModel)]="email" type="email" name="email" required></ion-input>\n\n         </ion-item>\n\n         <ion-item>\n\n            <button [disabled]="!enviarEmailForm.form.valid" type="submit" ion-button icon-end full>\n\n               ENVIAR EMAIL\n\n               <ion-icon name="send"></ion-icon>\n\n            </button>\n\n         </ion-item>\n\n      </form>\n\n   </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\trabalho-graduacao\pwa\src\pages\forgot-password\forgot-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_usuario_usuario_service__["a" /* UsuarioProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());

//# sourceMappingURL=forgot-password.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlterarUsuarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_usuario_usuario_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__invalid_parameters_invalid_parameters__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AlterarUsuarioPage = /** @class */ (function () {
    function AlterarUsuarioPage(navCtrl, service, authService, toastCtrl, loadingCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.usuario = {
            tipoPessoa: 'F'
        };
        this.dataAtual = new Date();
    }
    AlterarUsuarioPage.prototype.ionViewDidLoad = function () {
        this.buscar();
    };
    AlterarUsuarioPage.prototype.setDataMinima = function () {
        if (this.usuario.tipoPessoa == 'F')
            this.dataMinima = "" + (this.dataAtual.getFullYear() - 18);
        else
            this.dataMinima = "" + this.dataAtual.getFullYear();
    };
    AlterarUsuarioPage.prototype.buscar = function () {
        var _this = this;
        this.presentLoading();
        var user = this.authService.getUser();
        this.service.buscar(user.id).subscribe(function (data) {
            _this.usuario = data.content;
            _this.loading.dismiss();
        }, function (res) {
            _this.loading.dismiss();
            _this.presentToast('Ocorreu um erro no servidor');
        });
    };
    AlterarUsuarioPage.prototype.alterar = function () {
        var _this = this;
        this.presentLoading();
        this.service.alterar(this.usuario).then(function (data) {
            _this.loading.dismiss();
            _this.presentToast('Alterado com Sucesso');
        }).catch(function (res) {
            _this.loading.dismiss();
            _this.handlerError(res);
        });
    };
    AlterarUsuarioPage.prototype.goBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    AlterarUsuarioPage.prototype.handlerError = function (res) {
        switch (res.status) {
            case 400:
                this.presentModal(res.error.message);
                break;
            default:
                this.presentToast('Ocorreu um erro no servidor');
                break;
        }
    };
    AlterarUsuarioPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000
        });
        toast.present();
    };
    AlterarUsuarioPage.prototype.presentLoading = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Aguarde...'
        });
        this.loading.present();
    };
    AlterarUsuarioPage.prototype.presentModal = function (errors) {
        this.modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__invalid_parameters_invalid_parameters__["a" /* InvalidParametersPage */], { errors: errors });
        this.modal.present();
    };
    AlterarUsuarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-usuario-alterar',template:/*ion-inline-start:"C:\trabalho-graduacao\pwa\src\pages\usuario\alterar\usuario-alterar.html"*/'<ion-header>\n\n	<ion-navbar color="primary">\n\n		<button ion-button menuToggle>\n\n			<ion-icon name="menu"></ion-icon>\n\n		</button>\n\n		<ion-title>Home</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<ion-list>\n\n		<form #usuarioForm="ngForm" (ngSubmit)="alterar()">\n\n			<ion-item>\n\n				<ion-label>Tipo Pessoa</ion-label>\n\n				<ion-select id="select-pessoa" name="tipoPessoa" [(ngModel)]="usuario.tipoPessoa" (ngModelChange)="setDataMaxima()" required>\n\n					<ion-option value="F">Fisica</ion-option>\n\n					<ion-option value="J">Juridica</ion-option>\n\n				</ion-select>\n\n			</ion-item>\n\n\n\n			<ion-item>\n\n				<ion-label *ngIf="usuario.tipoPessoa == \'F\'" floating>Nome</ion-label>\n\n				<ion-label *ngIf="usuario.tipoPessoa == \'J\'" floating>Razão Social</ion-label>\n\n				<ion-input type="text" name="nomeRazaoSocial" [(ngModel)]="usuario.nomeRazaoSocial" required></ion-input>\n\n			</ion-item>\n\n\n\n			<ion-item>\n\n				<ion-label *ngIf="usuario.tipoPessoa == \'F\'" floating>Sobrenome</ion-label>\n\n				<ion-label *ngIf="usuario.tipoPessoa == \'J\'" floating>Nome Fantasia</ion-label>\n\n				<ion-input type="text" name="sobrenomeFantasia" [(ngModel)]="usuario.sobrenomeFantasia" required></ion-input>\n\n			</ion-item>\n\n\n\n			<ion-item>\n\n				<ion-label *ngIf="usuario.tipoPessoa == \'F\'" floating>CPF</ion-label>\n\n				<ion-label *ngIf="usuario.tipoPessoa == \'J\'" floating>CNPJ</ion-label>\n\n				<ion-input type="text" name="cpfCnpj" [(ngModel)]="usuario.cpfCnpj" required></ion-input>\n\n			</ion-item>\n\n\n\n			<ion-item>\n\n				<ion-label *ngIf="usuario.tipoPessoa == \'F\'" floating>RG</ion-label>\n\n				<ion-label *ngIf="usuario.tipoPessoa == \'J\'" floating>Inscricao Estadual</ion-label>\n\n				<ion-input type="text" name="rgInscricaoEstadual" [(ngModel)]="usuario.rgInscricaoEstadual" required></ion-input>\n\n			</ion-item>\n\n\n\n			<ion-item>\n\n				<ion-label floating>Email</ion-label>\n\n				<ion-input type="email" name="email" [(ngModel)]="usuario.email" required></ion-input>\n\n			</ion-item>\n\n\n\n			<ion-item style="margin-top: 20px;">\n\n				<ion-label *ngIf="usuario.tipoPessoa == \'F\'">Data de Nascimento</ion-label>\n\n				<ion-label *ngIf="usuario.tipoPessoa == \'J\'">Data de Constituicao</ion-label>\n\n				<ion-datetime max="dataMaxima"\n\n				 displayFormat="DD/MM/YYYY" name="dataNascimentoConstituicao" [(ngModel)]="usuario.dataNascimentoConstituicao" required></ion-datetime>\n\n			</ion-item>\n\n\n\n			<button [disabled]="!usuarioForm.form.valid" type="submit" ion-button block>SALVAR</button>\n\n			<button type="button" ion-button block (click)="goBack()">VOLTAR</button>\n\n		</form>\n\n	</ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\trabalho-graduacao\pwa\src\pages\usuario\alterar\usuario-alterar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_usuario_usuario_service__["a" /* UsuarioProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], AlterarUsuarioPage);
    return AlterarUsuarioPage;
}());

//# sourceMappingURL=usuario-alterar.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsumoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_consumo_consumo_service__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js__ = __webpack_require__(870);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConsumoPage = /** @class */ (function () {
    function ConsumoPage(navCtrl, _service) {
        this.navCtrl = navCtrl;
        this._service = _service;
        this.filtro = {};
        this.labels = [
            '02/10',
            '03/10',
            '04/10',
            '05/10',
            '06/10',
            '07/10'
        ];
        this.data = [
            23.57,
            12.8,
            56.12,
            43,
            12,
            7
        ];
    }
    ConsumoPage.prototype.ionViewDidLoad = function () {
        this.criaGraficoDeBarra();
    };
    ConsumoPage.prototype.onSubmit = function () {
        var _this = this;
        this._service.getConsumoOf(this.filtro).subscribe(function (data) {
            console.log(data);
            _this.trataDados(data.content);
        }, function (res) {
            console.log(res);
        });
    };
    ConsumoPage.prototype.trataDados = function (dados) {
        var _this = this;
        dados.forEach(function (obj) {
            _this.labels.push(obj._id.day + "/" + obj._id.month);
            _this.data.push(obj.total.toFixed(2));
        });
        this.criaGraficoDeBarra();
    };
    ConsumoPage.prototype.criaGraficoDeBarra = function () {
        this.barChart = new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"](this.barraEl.nativeElement, {
            type: 'bar',
            data: {
                labels: this.labels,
                datasets: [{
                        label: 'Valor em W',
                        data: this.data,
                        backgroundColor: '#0336FF',
                        borderColor: '#0336FF',
                        borderWidth: 2
                    }]
            },
            options: {
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                }
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('graficoBarra'),
        __metadata("design:type", Object)
    ], ConsumoPage.prototype, "barraEl", void 0);
    ConsumoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-consumo',template:/*ion-inline-start:"C:\trabalho-graduacao\pwa\src\pages\consumo\consumo.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <ion-title>Consumo</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n        <form #consumoForm="ngForm" (ngsubmit)="onSubmit()">\n\n            <ion-item>\n\n                <ion-label floating>De</ion-label>\n\n                <ion-datetime displayFormat=\'DD/MM/YYYY\' name="dateInicial" [(ngModel)]="filtro.dataInicial"></ion-datetime>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label floating>Até</ion-label>\n\n                <ion-datetime displayFormat=\'DD/MM/YYYY\' name="dataFinal" [(ngModel)]="filtro.dataFinal"></ion-datetime>\n\n            </ion-item> \n\n            <ion-fab>\n\n                <button type="submit" (click)="onSubmit()" ion-fab mini>\n\n                    <ion-icon name="stats"></ion-icon>\n\n                </button>\n\n            </ion-fab> \n\n        </form>\n\n    </ion-list>\n\n    <ion-card>\n\n        <ion-card-header>Consumo</ion-card-header>\n\n        <ion-card-content>\n\n            <canvas #graficoBarra></canvas>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\trabalho-graduacao\pwa\src\pages\consumo\consumo.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_consumo_consumo_service__["a" /* ConsumoProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_consumo_consumo_service__["a" /* ConsumoProvider */]) === "function" && _b || Object])
    ], ConsumoPage);
    return ConsumoPage;
    var _a, _b;
}());

//# sourceMappingURL=consumo.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(381);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_interceptor_module__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_usuario_usuario_module__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_auth_service_auth_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_usuario_usuario_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_home_home_service__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_home__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_forgot_password_forgot_password__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_change_password_change_password__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_invalid_parameters_invalid_parameters__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_consumo_consumo_service__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_consumo_consumo__ = __webpack_require__(375);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// Modules



// Providers



// Pages








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_change_password_change_password__["a" /* ChangePasswordPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_invalid_parameters_invalid_parameters__["a" /* InvalidParametersPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_consumo_consumo__["a" /* ConsumoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__providers_interceptor_module__["a" /* InterceptorModule */],
                __WEBPACK_IMPORTED_MODULE_8__pages_usuario_usuario_module__["a" /* UsuarioModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_change_password_change_password__["a" /* ChangePasswordPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_invalid_parameters_invalid_parameters__["a" /* InvalidParametersPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_consumo_consumo__["a" /* ConsumoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_10__providers_usuario_usuario_service__["a" /* UsuarioProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_home_home_service__["a" /* HomeProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_consumo_consumo_service__["a" /* ConsumoProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpRequestInterceptor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterceptorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environment_environment__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HttpRequestInterceptor = /** @class */ (function () {
    function HttpRequestInterceptor(storage) {
        var _this = this;
        this.storage = storage;
        this.storage.get(__WEBPACK_IMPORTED_MODULE_3__environment_environment__["a" /* ENVIRONMENT */].tokenNome).then(function (value) {
            _this.token = value;
        });
    }
    HttpRequestInterceptor.prototype.intercept = function (req, next) {
        if (this.token) {
            var changeReq = req.clone({ headers: req.headers.set('Authentication', this.token) });
            return next.handle(changeReq);
        }
        else {
            return next.handle(req);
        }
    };
    HttpRequestInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], HttpRequestInterceptor);
    return HttpRequestInterceptor;
}());

var InterceptorModule = /** @class */ (function () {
    function InterceptorModule() {
    }
    InterceptorModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [],
            imports: [],
            exports: [],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: HttpRequestInterceptor,
                    multi: true
                }
            ],
        })
    ], InterceptorModule);
    return InterceptorModule;
}());

//# sourceMappingURL=interceptor.module.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastrar_usuario_cadastrar__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alterar_usuario_alterar__ = __webpack_require__(374);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UsuarioModule = /** @class */ (function () {
    function UsuarioModule() {
    }
    UsuarioModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cadastrar_usuario_cadastrar__["a" /* CadastrarUsuarioPage */],
                __WEBPACK_IMPORTED_MODULE_3__alterar_usuario_alterar__["a" /* AlterarUsuarioPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cadastrar_usuario_cadastrar__["a" /* CadastrarUsuarioPage */]),
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__alterar_usuario_alterar__["a" /* AlterarUsuarioPage */])
            ],
        })
    ], UsuarioModule);
    return UsuarioModule;
}());

//# sourceMappingURL=usuario.module.js.map

/***/ }),

/***/ 447:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environment_environment__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthServiceProvider = /** @class */ (function () {
    function AuthServiceProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        this.usuario = null;
    }
    AuthServiceProvider.prototype.logar = function (loginData) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environment_environment__["a" /* ENVIRONMENT */].urlApi + "/api/login", loginData).toPromise();
    };
    AuthServiceProvider.prototype.logout = function () {
        this.storage.remove(__WEBPACK_IMPORTED_MODULE_2__environment_environment__["a" /* ENVIRONMENT */].tokenNome);
    };
    AuthServiceProvider.prototype.setToken = function (token) {
        this.storage.set(__WEBPACK_IMPORTED_MODULE_2__environment_environment__["a" /* ENVIRONMENT */].tokenNome, token);
    };
    AuthServiceProvider.prototype.setUser = function (usuario) {
        this.usuario = usuario;
        this.storage.set('usuario', usuario);
    };
    AuthServiceProvider.prototype.getUser = function () {
        return this.usuario;
    };
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], AuthServiceProvider);
    return AuthServiceProvider;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ENVIRONMENT; });
var ENVIRONMENT = {
    urlApi: 'http://localhost:3001',
    // urlApi: 'http://192.168.1.18:3001',
    tokenNome: 'TK_ENR'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environment_environment__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsuarioProvider = /** @class */ (function () {
    function UsuarioProvider(http) {
        this.http = http;
    }
    UsuarioProvider.prototype.buscar = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environment_environment__["a" /* ENVIRONMENT */].urlApi + "/api/usuario/" + id);
    };
    UsuarioProvider.prototype.cadastrar = function (usuario) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environment_environment__["a" /* ENVIRONMENT */].urlApi + "/api/usuario", usuario).toPromise();
    };
    UsuarioProvider.prototype.alterar = function (usuario) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__environment_environment__["a" /* ENVIRONMENT */].urlApi + "/api/usuario/" + usuario.id, usuario).toPromise();
    };
    UsuarioProvider.prototype.alterarSenha = function (usuario) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__environment_environment__["a" /* ENVIRONMENT */].urlApi + "/api/usuario/" + usuario.id + "/alterar-senha", usuario).toPromise();
    };
    UsuarioProvider.prototype.esqueceuSenha = function (idUsuario, email) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environment_environment__["a" /* ENVIRONMENT */].urlApi + "/api/usuario/" + idUsuario + "/esqueceu-senha", { email: email }).toPromise();
    };
    UsuarioProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], UsuarioProvider);
    return UsuarioProvider;
}());

//# sourceMappingURL=usuario.service.js.map

/***/ }),

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environment_environment__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeProvider = /** @class */ (function () {
    function HomeProvider(http) {
        this.http = http;
    }
    HomeProvider.prototype.buscar = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environment_environment__["a" /* ENVIRONMENT */].urlApi + "/api/usuario/" + id);
    };
    HomeProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], HomeProvider);
    return HomeProvider;
}());

//# sourceMappingURL=home.service.js.map

/***/ }),

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_usuario_alterar_usuario_alterar__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_service_auth_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_consumo_consumo__ = __webpack_require__(375);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { ListPage } from '../pages/list/list';




var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, _service) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this._service = _service;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Meu Usuario', component: __WEBPACK_IMPORTED_MODULE_6__pages_usuario_alterar_usuario_alterar__["a" /* AlterarUsuarioPage */] },
            { title: 'Consumo', component: __WEBPACK_IMPORTED_MODULE_8__pages_consumo_consumo__["a" /* ConsumoPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.logout = function () {
        this._service.logout();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\trabalho-graduacao\pwa\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list class="menu-lateral">\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n      <button menuClose ion-item (click)="logout()">\n\n        Sair\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\trabalho-graduacao\pwa\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_7__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_usuario_usuario_service__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChangePasswordPage = /** @class */ (function () {
    function ChangePasswordPage(navCtrl, navParams, service, authProvider, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.authProvider = authProvider;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    ChangePasswordPage.prototype.ionViewDidLoad = function () {
    };
    ChangePasswordPage.prototype.changePassword = function () {
        var _this = this;
        this.presentLoading();
        if (this.usuario.senha != this.usuario.confirmarSenha) {
            this.loading.dismiss();
            return this.presentToast('Senhas não conferem');
        }
        Object.assign(this.usuario, this.authProvider.getUser());
        this.service.alterarSenha(this.usuario).then(function (data) {
            _this.loading.dismiss();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
            _this.presentToast('Senha alterada com sucesso');
        }).catch(function (res) {
            _this.loading.dismiss();
            _this.presentToast('Ocorreu um erro no servidor');
        });
    };
    ChangePasswordPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000
        });
        toast.present();
    };
    ChangePasswordPage.prototype.presentLoading = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Aguarde...'
        });
        this.loading.present();
    };
    ChangePasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-change-password',template:/*ion-inline-start:"C:\trabalho-graduacao\pwa\src\pages\change-password\change-password.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <ion-title>Alteraçaõ de Senha</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n        <form #alterarSenha="ngForm" (ngSubmit)="changePassword()">\n\n            <ion-item>\n\n                <ion-label floating>Senha</ion-label>\n\n                <ion-input [(ngModel)]="usuario.senha" type="password" name="senha" required></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label floating>Confirmar Senha</ion-label>\n\n                <ion-input [(ngModel)]="usuario.confirmarSenha" type="password" name="confirmarSenha" required></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <button [disabled]="!alterarSenha.form.valid" type="submit" ion-button icon-end full>\n\n                    ALTERAR SENHA\n\n                </button>\n\n            </ion-item>\n\n        </form>\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\trabalho-graduacao\pwa\src\pages\change-password\change-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_usuario_usuario_service__["a" /* UsuarioProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], ChangePasswordPage);
    return ChangePasswordPage;
}());

//# sourceMappingURL=change-password.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forgot_password_forgot_password__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__usuario_cadastrar_usuario_cadastrar__ = __webpack_require__(270);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, authService, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.loginData = {};
    }
    LoginPage.prototype.ionViewDidLoad = function () {
    };
    LoginPage.prototype.chamaTelaCadastro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__usuario_cadastrar_usuario_cadastrar__["a" /* CadastrarUsuarioPage */]);
    };
    LoginPage.prototype.logar = function () {
        var _this = this;
        this.presentLoading();
        this.authService.logar(this.loginData).then(function (data) {
            _this.authService.setUser(data.content.usuario);
            _this.authService.setToken(data.content.token);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            _this.loading.dismiss();
        }).catch(function (res) {
            _this.loading.dismiss();
            _this.handlerError(res);
        });
        // this.navCtrl.setRoot(HomePage);
    };
    LoginPage.prototype.forgotPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__forgot_password_forgot_password__["a" /* ForgotPasswordPage */]);
    };
    LoginPage.prototype.handlerError = function (res) {
        switch (res.status) {
            case 404:
                this.presentToast(res.error.message);
                break;
            default:
                this.presentToast('Ocorreu um erro no servidor');
                break;
        }
    };
    LoginPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000
        });
        toast.present();
    };
    LoginPage.prototype.presentLoading = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Aguarde...'
        });
        this.loading.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\trabalho-graduacao\pwa\src\pages\login\login.html"*/'<ion-content padding>\n\n	<div style="margin-top: 60%">\n\n		<ion-list>\n\n			<form #loginForm="ngForm" (ngSubmit)="logar()">\n\n				<ion-item style="background-color: transparent">\n\n					<ion-label floating>Email</ion-label>\n\n					<ion-input type="email" name="email" [(ngModel)]="loginData.email" #email="ngModel" required></ion-input>\n\n				</ion-item>\n\n\n\n				<ion-item style="background-color: transparent">\n\n					<ion-label floating>Senha</ion-label>\n\n					<ion-input type="password" name="senha" [(ngModel)]="loginData.senha" #senha="ngModel" required></ion-input>\n\n				</ion-item>\n\n\n\n				<!-- <button ion-button type="submit" block>ENTRAR</button> -->\n\n				<button [disabled]="!loginForm.form.valid" ion-button type="submit" block>ENTRAR</button>\n\n				<button ion-button type="button" (click)="chamaTelaCadastro()" block>CADASTRAR</button>\n\n\n\n				<ion-item style="background-color: transparent" text-center>\n\n					<button type="button" id="forgot-password" (click)="forgotPassword()">\n\n						<a>Esqueci minha senha</a>\n\n					</button>\n\n				</ion-item>\n\n			</form>\n\n		</ion-list>\n\n	</div>\n\n</ion-content>'/*ion-inline-end:"C:\trabalho-graduacao\pwa\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_consumo_consumo_service__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, _service) {
        this.navCtrl = navCtrl;
        this._service = _service;
        this.consumoAtual = 2.4;
        this.today = Date.now();
        //this.valores();
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this._service.startSocket().then(function () {
            _this.connection = _this._service.getConsumo().subscribe(function (data) {
                _this.consumoAtual = data.valor;
                _this.today = data.data;
            });
        });
    };
    HomePage.prototype.valores = function () {
        var _this = this;
        setInterval(function () {
            _this.consumoAtual = (Math.random() * (100 - 1) + 1).toFixed(2);
        }, 1000);
        setInterval(function () {
            _this.today = Date.now();
        }, 1000);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\trabalho-graduacao\pwa\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <!-- <div style="display: flex;justify-content:center">\n\n    <h1>Consumindo</h1>\n\n  </div>\n\n  <div style="display: flex;justify-content:center">\n\n      <h1>{{today | date:\'dd/MM/yyyy\'}}</h1>\n\n  </div>\n\n  <ion-fab center middle>\n\n    <button ion-fab mini><span style="font-size: 50px">{{consumoAtual}}W</span></button>\n\n  </ion-fab>\n\n  <div style="display: flex;justify-content:center">\n\n      <h1>{{today | date:\'hh:mm:ss\'}}</h1>\n\n  </div> -->\n\n  <div id="container">\n\n    <div #consumo>\n\n      <div>\n\n        <p style="font-size: 4em;font-family: digital">\n\n          AGORA {{consumoAtual.toFixed(2)}}W\n\n        </p>\n\n      </div>\n\n      <div>\n\n        <hr style="background: black">\n\n        <p style="font-size: 3em; text-align: center;font-family: digital">\n\n          {{today | date: \'hh:mm:ss\'}}\n\n        </p>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\trabalho-graduacao\pwa\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_consumo_consumo_service__["a" /* ConsumoProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_consumo_consumo_service__["a" /* ConsumoProvider */]) === "function" && _b || Object])
    ], HomePage);
    return HomePage;
    var _a, _b;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 897:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 747,
	"./af.js": 747,
	"./ar": 748,
	"./ar-dz": 749,
	"./ar-dz.js": 749,
	"./ar-kw": 750,
	"./ar-kw.js": 750,
	"./ar-ly": 751,
	"./ar-ly.js": 751,
	"./ar-ma": 752,
	"./ar-ma.js": 752,
	"./ar-sa": 753,
	"./ar-sa.js": 753,
	"./ar-tn": 754,
	"./ar-tn.js": 754,
	"./ar.js": 748,
	"./az": 755,
	"./az.js": 755,
	"./be": 756,
	"./be.js": 756,
	"./bg": 757,
	"./bg.js": 757,
	"./bm": 758,
	"./bm.js": 758,
	"./bn": 759,
	"./bn.js": 759,
	"./bo": 760,
	"./bo.js": 760,
	"./br": 761,
	"./br.js": 761,
	"./bs": 762,
	"./bs.js": 762,
	"./ca": 763,
	"./ca.js": 763,
	"./cs": 764,
	"./cs.js": 764,
	"./cv": 765,
	"./cv.js": 765,
	"./cy": 766,
	"./cy.js": 766,
	"./da": 767,
	"./da.js": 767,
	"./de": 768,
	"./de-at": 769,
	"./de-at.js": 769,
	"./de-ch": 770,
	"./de-ch.js": 770,
	"./de.js": 768,
	"./dv": 771,
	"./dv.js": 771,
	"./el": 772,
	"./el.js": 772,
	"./en-au": 773,
	"./en-au.js": 773,
	"./en-ca": 774,
	"./en-ca.js": 774,
	"./en-gb": 775,
	"./en-gb.js": 775,
	"./en-ie": 776,
	"./en-ie.js": 776,
	"./en-il": 777,
	"./en-il.js": 777,
	"./en-nz": 778,
	"./en-nz.js": 778,
	"./eo": 779,
	"./eo.js": 779,
	"./es": 780,
	"./es-do": 781,
	"./es-do.js": 781,
	"./es-us": 782,
	"./es-us.js": 782,
	"./es.js": 780,
	"./et": 783,
	"./et.js": 783,
	"./eu": 784,
	"./eu.js": 784,
	"./fa": 785,
	"./fa.js": 785,
	"./fi": 786,
	"./fi.js": 786,
	"./fo": 787,
	"./fo.js": 787,
	"./fr": 788,
	"./fr-ca": 789,
	"./fr-ca.js": 789,
	"./fr-ch": 790,
	"./fr-ch.js": 790,
	"./fr.js": 788,
	"./fy": 791,
	"./fy.js": 791,
	"./gd": 792,
	"./gd.js": 792,
	"./gl": 793,
	"./gl.js": 793,
	"./gom-latn": 794,
	"./gom-latn.js": 794,
	"./gu": 795,
	"./gu.js": 795,
	"./he": 796,
	"./he.js": 796,
	"./hi": 797,
	"./hi.js": 797,
	"./hr": 798,
	"./hr.js": 798,
	"./hu": 799,
	"./hu.js": 799,
	"./hy-am": 800,
	"./hy-am.js": 800,
	"./id": 801,
	"./id.js": 801,
	"./is": 802,
	"./is.js": 802,
	"./it": 803,
	"./it.js": 803,
	"./ja": 804,
	"./ja.js": 804,
	"./jv": 805,
	"./jv.js": 805,
	"./ka": 806,
	"./ka.js": 806,
	"./kk": 807,
	"./kk.js": 807,
	"./km": 808,
	"./km.js": 808,
	"./kn": 809,
	"./kn.js": 809,
	"./ko": 810,
	"./ko.js": 810,
	"./ky": 811,
	"./ky.js": 811,
	"./lb": 812,
	"./lb.js": 812,
	"./lo": 813,
	"./lo.js": 813,
	"./lt": 814,
	"./lt.js": 814,
	"./lv": 815,
	"./lv.js": 815,
	"./me": 816,
	"./me.js": 816,
	"./mi": 817,
	"./mi.js": 817,
	"./mk": 818,
	"./mk.js": 818,
	"./ml": 819,
	"./ml.js": 819,
	"./mn": 820,
	"./mn.js": 820,
	"./mr": 821,
	"./mr.js": 821,
	"./ms": 822,
	"./ms-my": 823,
	"./ms-my.js": 823,
	"./ms.js": 822,
	"./mt": 824,
	"./mt.js": 824,
	"./my": 825,
	"./my.js": 825,
	"./nb": 826,
	"./nb.js": 826,
	"./ne": 827,
	"./ne.js": 827,
	"./nl": 828,
	"./nl-be": 829,
	"./nl-be.js": 829,
	"./nl.js": 828,
	"./nn": 830,
	"./nn.js": 830,
	"./pa-in": 831,
	"./pa-in.js": 831,
	"./pl": 832,
	"./pl.js": 832,
	"./pt": 833,
	"./pt-br": 834,
	"./pt-br.js": 834,
	"./pt.js": 833,
	"./ro": 835,
	"./ro.js": 835,
	"./ru": 836,
	"./ru.js": 836,
	"./sd": 837,
	"./sd.js": 837,
	"./se": 838,
	"./se.js": 838,
	"./si": 839,
	"./si.js": 839,
	"./sk": 840,
	"./sk.js": 840,
	"./sl": 841,
	"./sl.js": 841,
	"./sq": 842,
	"./sq.js": 842,
	"./sr": 843,
	"./sr-cyrl": 844,
	"./sr-cyrl.js": 844,
	"./sr.js": 843,
	"./ss": 845,
	"./ss.js": 845,
	"./sv": 846,
	"./sv.js": 846,
	"./sw": 847,
	"./sw.js": 847,
	"./ta": 848,
	"./ta.js": 848,
	"./te": 849,
	"./te.js": 849,
	"./tet": 850,
	"./tet.js": 850,
	"./tg": 851,
	"./tg.js": 851,
	"./th": 852,
	"./th.js": 852,
	"./tl-ph": 853,
	"./tl-ph.js": 853,
	"./tlh": 854,
	"./tlh.js": 854,
	"./tr": 855,
	"./tr.js": 855,
	"./tzl": 856,
	"./tzl.js": 856,
	"./tzm": 857,
	"./tzm-latn": 858,
	"./tzm-latn.js": 858,
	"./tzm.js": 857,
	"./ug-cn": 859,
	"./ug-cn.js": 859,
	"./uk": 860,
	"./uk.js": 860,
	"./ur": 861,
	"./ur.js": 861,
	"./uz": 862,
	"./uz-latn": 863,
	"./uz-latn.js": 863,
	"./uz.js": 862,
	"./vi": 864,
	"./vi.js": 864,
	"./x-pseudo": 865,
	"./x-pseudo.js": 865,
	"./yo": 866,
	"./yo.js": 866,
	"./zh-cn": 867,
	"./zh-cn.js": 867,
	"./zh-hk": 868,
	"./zh-hk.js": 868,
	"./zh-tw": 869,
	"./zh-tw.js": 869
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 897;

/***/ })

},[376]);
//# sourceMappingURL=main.js.map