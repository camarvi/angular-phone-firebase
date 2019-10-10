import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


// IMPORTAR MODELO DE DATOS
import { Telefono } from '../models/telefono';

@Injectable({
  providedIn: 'root'
})
export class TelefonoService {

  public listaTelefonos : AngularFireList<any>;
  public selectedTelefono : Telefono = new Telefono(); //Se inicializa a vacio

  constructor(private firebase : AngularFireDatabase) { }


  getTelefonos(){
    return this.listaTelefonos = this.firebase.list('telefonos');

  }

  insertTelefono(newTelefono : Telefono){
    this.listaTelefonos.push({
      centro : newTelefono.centro,
      ubicacion : newTelefono.ubicacion,
      numero : newTelefono.numero
    });
  }

  updateTelefono(telefono : Telefono){
    this.listaTelefonos.update(telefono.$key,{
      centro : telefono.centro,
      ubicacion : telefono.ubicacion,
      numero : telefono.numero
    })
  }

  deleteTelefono(telefono : Telefono){
    this.listaTelefonos.remove(telefono.$key);
  }


  filtratelefono(filtro:string) {
    this.listaTelefonos = this.firebase.list('telefonos'), {
      query : {
        orderByChild : 'centro',
        equalTo : filtro
      }
    } 

    return this.listaTelefonos;
  }

  
}
