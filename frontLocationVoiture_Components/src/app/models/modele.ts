import { Marque } from "./marque";

// class modele.model.ts
export class Modele {
  id?: number;
  nom: string;
  marque: Marque;

  constructor() {
    this.nom = '';
    this.marque = new Marque();
  }
}
