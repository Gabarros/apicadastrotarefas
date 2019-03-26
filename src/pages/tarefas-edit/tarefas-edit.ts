import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Tarefa, TarefasProvider } from '../../providers/tarefas/tarefas';

/**
 * Generated class for the TarefasEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tarefas-edit',
  templateUrl: 'tarefas-edit.html',
})
export class TarefasEditPage {

  tarefa: Tarefa;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toast: ToastController, 
    private tarefasProvider: TarefasProvider) {
      this.tarefa = new Tarefa();

      if (this.navParams.data.id) {
        this.tarefasProvider.findById(this.navParams.data.id)
          .then((result: any) => {
            this.tarefa = result;
          })
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TarefasEditPage');
  }

  save() {
    this.tarefasProvider.save(this.tarefa)
      .then(() => {
        this.toast.create({ message: 'Tarefa Salva.', duration: 3000, position: 'botton' }).present();
        this.navCtrl.pop();
      })
      .catch(() => {
        this.toast.create({ message: 'Erro ao salvar a Tarefa.', duration: 3000, position: 'botton' }).present();
      });
  }

}
