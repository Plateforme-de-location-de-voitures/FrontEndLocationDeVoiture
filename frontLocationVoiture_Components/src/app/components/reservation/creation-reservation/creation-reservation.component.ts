import { Component } from '@angular/core';
import { Reservation } from 'src/app/models/reservation';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-creation-reservation',
  templateUrl: './creation-reservation.component.html',
  styleUrls: ['./creation-reservation.component.css']
})
export class CreationReservationComponent {

  reserveOn = true;
  onReserveOn(){
    this.reserveOn = true;
  }
  onReserveOff(){
    this.reserveOn = false;
  }
  reservationData: Reservation = new Reservation();// Déclarez une instance de la classe Reservation pour stocker les données du formulaire
  isCreationSuccessful: boolean = false;
  errorMessage: string = '';

  constructor (private reservationService: ReservationService) { }

  ngOnInit(): void {
  }

  creerReservation() {
    // Appelez la méthode createReservation du service pour enregistrer la nouvelle reservation
    this.reservationService.createReservation(this.reservationData).subscribe(
      response => {
        this.isCreationSuccessful = true;
        this.errorMessage = '';
        // Réinitialiser les données de la reservation après la création réussie
        this.reservationData = new Reservation();
      },
      error => {
        this.isCreationSuccessful = false;
        this.errorMessage = 'Erreur lors de la création de la reservation.';
        console.error(error);
      }
    );
  }
}
