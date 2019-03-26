import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http'; 

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TarefasProvider } from '../providers/tarefas/tarefas';
import { UsuariosProvider } from '../providers/usuarios/usuarios';
import { TarefasEditPage } from '../pages/tarefas-edit/tarefas-edit';
import { TarefasPage } from '../pages/tarefas/tarefas';
import { UsuariosEditPage } from '../pages/usuarios-edit/usuarios-edit';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    TarefasEditPage,
    UsuariosEditPage,
    TarefasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    TarefasEditPage,
    UsuariosEditPage,
    TarefasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TarefasProvider,
    UsuariosProvider
  ]
})
export class AppModule {}
