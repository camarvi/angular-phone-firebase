import { Component, OnInit } from '@angular/core';

// IMPORTAR EL SERVICIO

import { TelefonoService } from '../../../services/telefono.service';

@Component({
  selector: 'app-telefono',
  templateUrl: './telefono.component.html',
  styleUrls: ['./telefono.component.css']
})
export class TelefonoComponent implements OnInit {

  constructor(private telefonoService : TelefonoService) { }

  ngOnInit() {
  }

}
