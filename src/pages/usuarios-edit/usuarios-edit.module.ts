import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsuariosEditPage } from './usuarios-edit';

@NgModule({
  declarations: [
    UsuariosEditPage,
  ],
  imports: [
    IonicPageModule.forChild(UsuariosEditPage),
  ],
})
export class UsuariosEditPageModule {}
