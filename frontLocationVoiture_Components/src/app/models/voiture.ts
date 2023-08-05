import { Modele } from "./modele";
import { Proprietaire } from "./users";

// class voiture.model.ts
export class Voiture {
  id?: number;
  proprietaire: Proprietaire;
  modele: Modele;
  numeroSerie: string;
  vinNumber: string;
  couleur: string;
  prix: number;
  anneeFabrication: number;
  puissance: number;
  imagePrincipal: string;//ou imagePrincipal: File| null;;
  statutVoiture: boolean;

  constructor(){
    this.proprietaire  = new Proprietaire();
    this.modele = new Modele();
    this.numeroSerie = '';
    this.vinNumber = '';
    this.couleur = '';
    this.prix = 0;
    this.anneeFabrication = 0;
    this.puissance = 0;
    this.imagePrincipal = '' ;//ou this.imagePrincipal = null;
    this.statutVoiture = false;
  }
}
