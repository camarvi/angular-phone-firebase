import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

// IMPORTAR EL SERVICIO

import { TelefonoService } from '../../../services/telefono.service';

//IMPORTAR EL MODELO

import { Telefono } from '../../../models/telefono';

@Component({
  selector: 'app-telefono',
  templateUrl: './telefono.component.html',
  styleUrls: ['./telefono.component.css']
})
export class TelefonoComponent implements OnInit {

  constructor(private telefonoService : TelefonoService) { }

  ngOnInit() {
    this.telefonoService.getTelefonos();
    console.log(this.telefonoService.getTelefonos());
    this.resetForm();
    
  }
  
  onSubmit(phoneForm){
    console.log(phoneForm.value)
    this.telefonoService.insertTelefono(phoneForm.value);
    this.resetForm(phoneForm);
  }


  resetForm(phoneForm?: NgForm){
    if (phoneForm != null) {
      phoneForm.reset;
      this.telefonoService.selectedTelefono = new Telefono();
    }

  }


}
