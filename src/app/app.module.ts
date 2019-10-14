import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// IMPORTAR EL ROUTING

import { routing, appRoutingProviders } from './app-routing.module';

import { FormsModule } from '@angular/forms';


// Importar las animaciones, necesario para ngx-toastr
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';

// Importar modulos de Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
// Importo la configuración de la base de datos Firebase
import { environment } from '../environments/environment';

// COMPONENTES
import { TelefonosComponent } from './components/telefonos/telefonos.component';
import { ListadoTelefonosComponent } from './components/telefonos/listado-telefonos/listado-telefonos.component';
import { TelefonoComponent } from './components/telefonos/telefono/telefono.component';
import { HomeComponent } from './components/home/home.component';

// SERVICIOS
import { TelefonoService } from './services/telefono.service';



@NgModule({
  declarations: [
    AppComponent,
    TelefonosComponent,
    ListadoTelefonosComponent,
    TelefonoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routing,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [
    TelefonoService,
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
