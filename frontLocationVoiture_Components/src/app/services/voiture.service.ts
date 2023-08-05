import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Voiture } from '../models/voiture';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {

  // construteur
  constructor(private http: HttpClient) { }
  // declaration de la route de connexion
  private apiUrl = 'http://localhost:8000/api/';

  // Récupérer la liste des voitures
  getVoituresList(): Observable<Voiture[]> {
    return this.http.get<Voiture[]>(this.apiUrl + 'voitures');
  }

  // Récupérer les détails d'une voiture en utilisant son ID
  getVoitureDetail(voitureId: number): Observable<Voiture> {
    return this.http.get<Voiture>(this.apiUrl + 'voiture/' + voitureId);
  }

  // Recherche de voitures par marque
  searchVoituresByMarque(marque: string): Observable<any> {
    return this.http.get(this.apiUrl + 'recherche/voitures-par-marque/' + marque);
  }

 // Créer une nouvelle voiture
createVoiture(voitureData: Voiture): Observable<any> {
  return this.http.post(this.apiUrl + 'voiture/create', voitureData);
}

// Mettre à jour une voiture existante
updateVoiture(voitureId: number, voitureData: Voiture): Observable<Voiture> {
  return this.http.put<Voiture>(this.apiUrl + 'voiture/update/' + voitureId, voitureData);
}

  // Supprimer une voiture en utilisant son ID
  deleteVoiture(voitureId: number): Observable<Voiture> {
    return this.http.delete<Voiture>(this.apiUrl + 'voiture/delete/' + voitureId);
  }
}
