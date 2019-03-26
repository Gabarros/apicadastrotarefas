import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TarefasEditPage } from './tarefas-edit';

@NgModule({
  declarations: [
    TarefasEditPage,
  ],
  imports: [
    IonicPageModule.forChild(TarefasEditPage),
  ],
})
export class TarefasEditPageModule {}
