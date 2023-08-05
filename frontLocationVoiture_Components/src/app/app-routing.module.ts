import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModifierVoitureComponent } from './components/voiture/modifier-voiture/modifier-voiture.component';
import { VoitureComponent } from './components/voiture/voiture.component';
import { CreationVoitureComponent } from './components/voiture/creation-voiture/creation-voiture.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { ModifierReservationComponent } from './components/reservation/modifier-reservation/modifier-reservation.component';
import { CreationReservationComponent } from './components/reservation/creation-reservation/creation-reservation.component';

const routes: Routes = [
  { path: '', redirectTo: '/voitures', pathMatch: 'full' },
  { path: 'voitures', component: VoitureComponent },
  { path: 'ajouter-voiture', component: CreationVoitureComponent },
  { path: 'modifier-voiture/:id', component: ModifierVoitureComponent },

  { path: 'reservations', component: ReservationComponent },
  { path: 'creation-reservations', component: CreationReservationComponent },
  { path: 'modifier-reservation/:id', component: ModifierReservationComponent },
  // Autres routes de votre application
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
