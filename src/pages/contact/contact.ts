import { Component } from '@angular/core';
import { NavController, ToastController, NavParams, IonicPage} from 'ionic-angular';
import { TarefasProvider, Tarefa } from '../../providers/tarefas/tarefas';
import { TarefasEditPage } from '../tarefas-edit/tarefas-edit';

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  tarefas: Array<Tarefa>;

  constructor(public navCtrl: NavController,  public navParams: NavParams
    ,public tarefasProvider: TarefasProvider, private toast: ToastController) {
      console.log('Carregado');
      this.getTarefas();
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

  ionViewWillEnter() {
    this.getTarefas();
  }

  getTarefas() {
    this.tarefasProvider.findAll()
    .then( 
      (result: any) => {
        this.tarefas = result;
      }
    );
  }
  removeTarefa(id: number) {
    this.tarefasProvider.deleteById(id)
      .then( () => {
        this.getTarefas();
        this.toast.create({ message: 'Tarefa removida.', duration: 3000, position: 'botton' }).present();
      }
      )
  }
  editTarefa(id: number) {
    this.navCtrl.push(TarefasEditPage, {id: id});
  }

  addTarefa() {
    this.navCtrl.push(TarefasEditPage);
  }

}