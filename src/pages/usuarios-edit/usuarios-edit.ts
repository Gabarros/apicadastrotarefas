import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Usuario, UsuariosProvider } from '../../providers/usuarios/usuarios';

/**
 * Generated class for the UsuariosEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-usuarios-edit',
  templateUrl: 'usuarios-edit.html',
})
export class UsuariosEditPage {
  usuarios: Array<Usuario>;
  usuario: Usuario;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toast: ToastController, 
  public usuariosProvider: UsuariosProvider) {
      this.usuario = new Usuario();

      if (this.navParams.data.id) {
        this.usuariosProvider.findById(this.navParams.data.id)
          .then((result: any) => {
            this.usuario = result;
            console.log('Editando usuario');
          });
      }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsuariosEditPage');
  }

  save() {
    this.usuariosProvider.save(this.usuario)
      .then(() => {
        this.toast.create({ message: 'Usuário Salvo.', duration: 3000, position: 'botton' }).present();
        this.navCtrl.pop();
      })
      .catch(() => {
        this.toast.create({ message: 'Erro ao salvar o Usuário.', duration: 3000, position: 'botton' }).present();
      });
  }


}
