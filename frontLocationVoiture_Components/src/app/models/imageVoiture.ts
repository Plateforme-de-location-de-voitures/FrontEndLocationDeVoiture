import { Voiture } from "./voiture";

// class Reservation.model.ts

export class ImageVoiture {
  id: number;
  voiture: Voiture;
  image: string; //image: File| null;

  constructor() {
    this.id = 0;
    this.voiture = new Voiture();
    this.image = '' // this.image = null;
  }
}
