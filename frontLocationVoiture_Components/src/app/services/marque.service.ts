import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarqueService {

  // construteur
  constructor(private http: HttpClient) { }
  // declaration de la route de connexion
  private apiUrl = 'http://localhost:8000/api/';

  // Récupérer la liste des marques
  getMarquesList(): Observable<any> {
    return this.http.get(this.apiUrl + 'marques');
  }

  // Créer une nouvelle marque
  createMarque(marqueData: any): Observable<any> {
    return this.http.post(this.apiUrl + 'marque/create', marqueData);
  }

  // Mettre à jour une marque existante
  updateMarque(marqueId: number, marqueData: any): Observable<any> {
    return this.http.put(this.apiUrl + 'marque/update/' + marqueId, marqueData);
  }

  // Supprimer une marque en utilisant l'id
  deleteMarque(marqueId: number): Observable<any> {
    return this.http.delete(this.apiUrl + 'marque/delete/' + marqueId);
  }
}
