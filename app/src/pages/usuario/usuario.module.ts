import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastrarUsuarioPage } from './cadastrar/usuario-cadastrar';
import { AlterarUsuarioPage } from './alterar/usuario-alterar';

@NgModule({
  declarations: [
    CadastrarUsuarioPage,
    AlterarUsuarioPage
  ],
  imports: [
    IonicPageModule.forChild(CadastrarUsuarioPage),
    IonicPageModule.forChild(AlterarUsuarioPage)
  ],
  // exports: [
  //   CadastrarUsuarioPage,
  //   AlterarUsuarioPage
  // ],
  // entryComponents: [
  //   CadastrarUsuarioPage
  // ]
})
export class UsuarioModule {}
