import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModeleService {

  // construteur
  constructor(private http: HttpClient) { }
  // declaration de la route de connexion
  private apiUrl = 'http://localhost:8000/api/';

  // Récupérer la liste des modèles
  getModelesList(): Observable<any> {
    return this.http.get(this.apiUrl + 'modeles');
  }

  // Créer un nouveau modèle
  createModele(modeleData: any): Observable<any> {
    return this.http.post(this.apiUrl + 'modele/create', modeleData);
  }

  // Mettre à jour un modèle existant
  updateModele(modeleId: number, modeleData: any): Observable<any> {
    return this.http.put(this.apiUrl + 'modele/update/' + modeleId, modeleData);
  }

  // Supprimer un modèle en utilisant son ID
  deleteModele(modeleId: number): Observable<any> {
    return this.http.delete(this.apiUrl + 'modele/delete/' + modeleId);
  }
}
