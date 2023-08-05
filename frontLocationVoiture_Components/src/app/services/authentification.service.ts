import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personne } from 'src/app/models/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://example.com/api'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) { }

  creerCompte(personne: Personne): Observable<any> {
    const url = `${this.apiUrl}/creer-compte`; // Remplacez par l'URL de l'endpoint de création de compte de votre API
    return this.http.post(url, personne);
  }

  // Autres méthodes d'authentification (connexion, déconnexion, etc.)
}