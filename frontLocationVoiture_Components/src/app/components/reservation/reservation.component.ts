import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Reservation } from 'src/app/models/reservation';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {

  etat = true;
  setChangeStatut(status:boolean){
    if(status==true){
      this.etat = true;
    }
    else if(status==false){
      this.etat = false;
    }
  }
  

  reservations: Reservation[] = [];

  constructor(private reservationService: ReservationService, private router: Router) { }

  ngOnInit(): void {
    this.getReservationsList();
  }

  getReservationsList(): void {
    this.reservationService.getReservationsList().subscribe(
      reservations => {
        this.reservations = reservations;
      },
      error => {
        console.error(error);
      }
    );
  }

  modifierReservation(reservation: Reservation): void {
    this.router.navigate(['/modifier-reservation', reservation.id]);
  }

  deleteReservation(reservationId: number): void {
    this.reservationService.deleteReservation(reservationId).subscribe(
      () => {
        // Suppression réussie, mettre à jour la liste des reservations
        this.getReservationsList();
      },
      error => {
        console.error(error);
      }
    );
  }
}

