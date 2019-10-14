import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// IMPORTAR LOS COMPONENTES

import { TelefonosComponent } from './components/telefonos/telefonos.component';
import { ListadoTelefonosComponent } from './components/telefonos/listado-telefonos/listado-telefonos.component';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
  {path: '', component: TelefonosComponent },
  {path: 'home', component: HomeComponent },
  {path: 'telefono', component: TelefonosComponent},
  {path: 'lista-telefonos', component: ListadoTelefonosComponent},
  {path:'**', component: HomeComponent }
];

//@NgModule({
//  imports: [RouterModule.forRoot(routes)],
//  exports: [RouterModule]
//})

//export class AppRoutingModule { }

//Exportar el modulo de router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
