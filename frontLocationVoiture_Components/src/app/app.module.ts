import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersService } from './services/users.service';
import { ReservationService } from './services/reservation.service';
import { ImageVoitureService } from './services/image-voiture.service';
import { ModeleService } from './services/modele.service';
import { MarqueService } from './services/marque.service';
import { VoitureService } from './services/voiture.service';
import { VoitureComponent } from './components/voiture/voiture.component';
import { MarqueComponent } from './components/marque/marque.component';
import { ImageVoitureComponent } from './components/image-voiture/image-voiture.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { UsersComponent } from './components/users/users.component';
import { ModeleComponent } from './components/modele/modele.component';
import { CreationVoitureComponent } from './components/voiture/creation-voiture/creation-voiture.component';
import { RechercheVoitureComponent } from './components/voiture/recherche-voiture/recherche-voiture.component';
import { DetailsVoitureComponent } from './components/voiture/details-voiture/details-voiture.component';
import { ModifierVoitureComponent } from './components/voiture/modifier-voiture/modifier-voiture.component';
import { CreationReservationComponent } from './components/reservation/creation-reservation/creation-reservation.component';
import { ModifierReservationComponent } from './components/reservation/modifier-reservation/modifier-reservation.component';
import { LoginComponent } from './components/authentification/login/login.component';
import { RegisterComponent } from './components/authentification/register/register.component';
import { AccueilComponent } from './accueil/accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    VoitureComponent,
    MarqueComponent,
    ImageVoitureComponent,
    ReservationComponent,
    UsersComponent,
    ModeleComponent,
    CreationVoitureComponent,
    RechercheVoitureComponent,
    DetailsVoitureComponent,
    ModifierVoitureComponent,
    CreationReservationComponent,
    ModifierReservationComponent,
    LoginComponent,
    RegisterComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UsersService,ReservationService,ImageVoitureService,ModeleService,MarqueService,VoitureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
