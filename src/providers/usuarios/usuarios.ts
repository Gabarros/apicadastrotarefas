import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UsuariosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuariosProvider {

  apiUrl = '/api/usuarios/';
  usuarios: any;

  constructor(public http: HttpClient) {
    console.log('Hello UsuariosProvider Provider');
  }

  findAll() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+"")
      .subscribe(data => {
        resolve(data);
        console.log('The result is:');
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }

  findById(id: number) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+id)
      .subscribe(data => {
        resolve(data);
        console.log('The result is:');
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }

  deleteById(id: number) {
    return new Promise(resolve => {
      this.http.delete(this.apiUrl+id)
      .subscribe(data => {
        resolve(data);
        console.log('The result is:');
        console.log(data);
      }, err => {
        console.log(err);
      });
    });

}
save(usuario: any) {
  let data = JSON.stringify(usuario);
  return new Promise((resolve, reject) => {
    this.http.post(this.apiUrl, data)
    .subscribe(res => {
      resolve(res);
      console.log('The result is:'+res);
      console.log(usuario);
    }, (err) => {
      reject(err);
      console.log(err);
    });
  });
}
}

export class Usuario {
id: number;
email: string;
nome: string;

}



