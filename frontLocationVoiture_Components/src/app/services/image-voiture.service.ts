import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageVoitureService {

  // construteur
  constructor(private http: HttpClient) { }
  // declaration de la route de connexion
  private apiUrl = 'http://localhost:8000/api/';

  // Récupérer la liste d'images de voitures
  getImageVoitureList(): Observable<any> {
    return this.http.get(this.apiUrl + 'images/voitures');
  }

  // Récupérer les images d'une voiture spécifique en utilisant l'id
  getImagesParVoiture(voitureId: number): Observable<any> {
    return this.http.get(this.apiUrl + 'images/voiture/' + voitureId);
  }

  // Créer une nouvelle image de voiture
  createImageVoiture(imageData: any): Observable<any> {
    return this.http.post(this.apiUrl+'image/voiture/create', imageData);
  }

  // Récupérer les détails d'une image de voiture en utilisant l'id
  getImageVoitureDetail(imageId: number): Observable<any> {
    return this.http.get(this.apiUrl+'image/voiture/'+imageId);
  }

  // Supprimer une image de voiture en utilisant l'id
  deleteImageVoiture(imageId: number): Observable<any> {
    return this.http.delete(this.apiUrl+'image/voiture/delete/'+imageId);
  }
}
