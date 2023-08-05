import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-modifier-reservation',
  templateUrl: './modifier-reservation.component.html',
  styleUrls: ['./modifier-reservation.component.css']
})
export class ModifierReservationComponent {
  reservationId: any;
  reservationData: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reservationService: ReservationService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.reservationId = params['id'];
      this.getReservationDetail();
    });
  }

  getReservationDetail(): void {
    this.reservationService.getReservationDetail(this.reservationId).subscribe(
      (data: any) => {
        this.reservationData = data;
      },
      (error: any) => {
        console.error('Failed to retrieve reservation detail:', error);
      }
    );
  }

  modifierReservation(): void {
    this.reservationService.updateReservation(this.reservationId, this.reservationData).subscribe(
      () => {
        // Modification réussie, redirigez l'utilisateur vers la page de liste des reservations
        this.router.navigate(['/reservations']);
      },
      (error: any) => {
        console.error('Failed to update reservation:', error);
      }
    );
  }
}
