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

@NgModule({
  declarations: [
    AppComponent,
    VoitureComponent,
    MarqueComponent,
    ImageVoitureComponent,
    ReservationComponent,
    UsersComponent,
    ModeleComponent
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
