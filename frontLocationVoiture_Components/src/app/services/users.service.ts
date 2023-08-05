import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

   // construteur
   constructor(private http: HttpClient) { }
   // declaration de la route de connexion
   private apiUrl = 'http://localhost:8000/api/';

     // Récupérer la liste des rôles
  getRolesList(): Observable<any> {
    return this.http.get(this.apiUrl+'roles');
  }

  // Récupérer les détails d'un rôle en utilisant l'id
  getRoleDetail(roleId: number): Observable<any> {
    return this.http.get(this.apiUrl+'role/'+roleId);
  }

  // Enregistrement d'un nouvel utilisateur
  registerUser(userData: any): Observable<any> {
    return this.http.post(this.apiUrl+'register', userData);
  }

  // Connexion de l'utilisateur
  loginUser(userData: any): Observable<any> {
    return this.http.post(this.apiUrl+'login', userData);
  }

  // Récupérer les informations de l'utilisateur actuellement connecté
  getCurrentUser(): Observable<any> {
    return this.http.get(this.apiUrl+'user');
  }

  // Déconnexion de l'utilisateur
  logoutUser(): Observable<any> {
    return this.http.post(this.apiUrl+'logout', {});
  }
}
