import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

// IMPORTAR EL SERVICIO

import { TelefonoService } from '../../../services/telefono.service';

import { ToastrService } from 'ngx-toastr';

//IMPORTAR EL MODELO

import { Telefono } from '../../../models/telefono';

@Component({
  selector: 'app-telefono',
  templateUrl: './telefono.component.html',
  styleUrls: ['./telefono.component.css']
})
export class TelefonoComponent implements OnInit {

  constructor(private telefonoService : TelefonoService,
      private toastr_service : ToastrService  
    ) { }

  ngOnInit() {
    this.telefonoService.getTelefonos();
    console.log(this.telefonoService.getTelefonos());
    this.resetForm();
    
  }
  
  onSubmit(phoneForm){
    if (phoneForm.value.$key == null) {  //SE INSERTA UN NUEVO VALOR
      this.telefonoService.insertTelefono(phoneForm.value);
      this.toastr_service.success("Exito","Registro Almacenado");
    } else {  // SE MODIFICA UN VALOR
      this.telefonoService.updateTelefono(phoneForm.value)
      this.toastr_service.success("Exito", "Registro modificado");
    }
   
    this.resetForm(phoneForm);
  }


  resetForm(phoneForm?: NgForm){
    if (phoneForm != null) {
      phoneForm.reset;
      this.telefonoService.selectedTelefono = new Telefono();
    }

  }


}
