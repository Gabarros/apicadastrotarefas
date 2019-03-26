import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams, ToastController } from 'ionic-angular';
import { Usuario, UsuariosProvider } from '../../providers/usuarios/usuarios';
import { UsuariosEditPage } from '../usuarios-edit/usuarios-edit';


@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  usuarios: Array<Usuario>;

  constructor(public navCtrl: NavController,  public navParams: NavParams
    ,public usuariosProvider: UsuariosProvider, private toast: ToastController) {
      console.log('Carregado');
      this.getUsuarios();
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  ionViewWillEnter() {
    this.getUsuarios();
  }

  getUsuarios() {
    this.usuariosProvider.findAll()
    .then( 
      (result: any) => {
        this.usuarios = result;
      }
    );
  }
  removeUsuario(id: number) {
    this.usuariosProvider.deleteById(id)
      .then( () => {
        this.getUsuarios();
        this.toast.create({ message: 'Usuário removido.', duration: 3000, position: 'botton' }).present();
      }
      )
  }
  editUsuario(id: number) {
    this.navCtrl.push(UsuariosEditPage, {id: id});
  }

  addUsuario() {
    this.navCtrl.push(UsuariosEditPage);
  }

}
