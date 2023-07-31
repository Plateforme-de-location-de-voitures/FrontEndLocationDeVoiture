import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {

  // construteur
  constructor(private http: HttpClient) { }
  // declaration de la route de connexion
  private apiUrl = 'http://localhost:8000/api/';

  // Récupérer la liste des voitures
  getVoituresList(): Observable<any> {
    return this.http.get(this.apiUrl + 'voitures');
  }

  // Récupérer les détails d'une voiture en utilisant son ID
  getVoitureDetail(voitureId: number): Observable<any> {
    return this.http.get(this.apiUrl + 'voiture/' + voitureId);
  }

  // Recherche de voitures par marque
  searchVoituresByMarque(marque: string): Observable<any> {
    return this.http.get(this.apiUrl + 'recherche/voitures-par-marque/' + marque);
  }

  // Créer une nouvelle voiture
  createVoiture(voitureData: any): Observable<any> {
    return this.http.post(this.apiUrl + 'voiture/create', voitureData);
  }

  // Mettre à jour une voiture existante
  updateVoiture(voitureId: number, voitureData: any): Observable<any> {
    return this.http.put(this.apiUrl + 'voiture/update/' + voitureId, voitureData);
  }

  // Supprimer une voiture en utilisant son ID
  deleteVoiture(voitureId: number): Observable<any> {
    return this.http.delete(this.apiUrl + 'voiture/delete/' + voitureId);
  }
}
