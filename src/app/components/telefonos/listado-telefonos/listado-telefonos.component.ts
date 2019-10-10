import { Component, OnInit } from '@angular/core';

// IMPORTAR EL SERVICIO
import { TelefonoService } from '../../../services/telefono.service';

// IMPORTAR EL MODELO
import { Telefono } from '../../../models/telefono';

@Component({
  selector: 'app-listado-telefonos',
  templateUrl: './listado-telefonos.component.html',
  styleUrls: ['./listado-telefonos.component.css']
})
export class ListadoTelefonosComponent implements OnInit {

  public ListaTelefonos : Telefono[];

  constructor(private telefonoService: TelefonoService ) { }

  ngOnInit() {
    this.telefonoService.getTelefonos()
      .snapshotChanges() //cada vez que hay un cambio en BD lo recojo
      .subscribe(item=>{ // item son los elementos que traigo de la BD
        this.ListaTelefonos = []; // Inicializar el array
        item.forEach(element =>{  //Recorrer la lista de elementos
          let x= element.payload.toJSON() //convierto el contenido en un JSON
          x["$key"] = element.key; // añado la key a la lista
          this.ListaTelefonos.push(x as Telefono); // Añadir el elemento en la lista de telefonos
        });     
      });
  }

}
