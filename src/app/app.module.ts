import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { PromocionesComponent } from './pages/promociones/promociones.component';
import { AnunciosComponent } from './pages/anuncios/anuncios.component';
import { ConsultoriosComponent } from './pages/consultorios/consultorios.component';
import { ContactoComponent } from "./pages/contacto/contacto.component";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "nosotros", component: NosotrosComponent },
  { path: "servicios", component: ServiciosComponent },
  { path: "promociones", component: PromocionesComponent },
  { path: "consultorios", component: ConsultoriosComponent },
  { path: "anuncios", component: AnunciosComponent },
  { path: "contacto", component: ContactoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NosotrosComponent,
    ServiciosComponent,
    PromocionesComponent,
    AnunciosComponent,
    ConsultoriosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
