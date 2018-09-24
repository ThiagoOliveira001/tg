import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Modules
import { HttpClientModule } from '@angular/common/http';
import { InterceptorModule } from '../providers/interceptor.module';
import { UsuarioModule } from '../pages/usuario/usuario.module';

// Providers
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { UsuarioProvider } from '../providers/usuario/usuario.service';

// Pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { InvalidParametersPage } from '../pages/invalid-parameters/invalid-parameters';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    ForgotPasswordPage,
    InvalidParametersPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InterceptorModule,
    UsuarioModule, 
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    ForgotPasswordPage,
    InvalidParametersPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    UsuarioProvider
  ]
})
export class AppModule {}
