import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  // construteur
  constructor(private http: HttpClient) { }
  // declaration de la route de connexion
  private apiUrl = 'http://localhost:8000/api/';

  // Récupérer la liste des réservations
  getReservationsList(): Observable<any> {
    return this.http.get(this.apiUrl + 'reservations');
  }

  // Créer une nouvelle réservation
  createReservation(reservationData: any): Observable<any> {
    return this.http.post(this.apiUrl + 'reservation/create', reservationData);
  }

  // Recherche de réservations par nom du client
  searchReservationByClientName(nomClient: string): Observable<any> {
    return this.http.get(this.apiUrl + 'reservation/recherche/' + nomClient);
  }

  // Mettre à jour une réservation existante
  updateReservation(reservationId: number, reservationData: any): Observable<any> {
    return this.http.put(this.apiUrl + 'reservation/update/' + reservationId, reservationData);
  }

  // Supprimer une réservation en utilisant son ID
  deleteReservation(reservationId: number): Observable<any> {
    return this.http.delete(this.apiUrl + 'reservation/delete/' + reservationId);
  }

  // Récupérer les détails d'une réservation en utilisant son ID
  getReservationDetail(reservationId: number): Observable<any> {
    return this.http.get(this.apiUrl + 'reservation/detail/' + reservationId);
  }

  // Mettre fin à une réservation en utilisant son ID
  finishReservation(reservationId: number): Observable<any> {
    return this.http.post(this.apiUrl + 'fin/' + reservationId, {});
  }

  // Rechercher les voitures disponibles entre deux dates de réservation
  searchAvailableCars(dateReservation: string, dateRetour: string): Observable<any> {
    return this.http.get(this.apiUrl + 'voiture/disponible/' + dateReservation + '/' + dateRetour);
  }
}
