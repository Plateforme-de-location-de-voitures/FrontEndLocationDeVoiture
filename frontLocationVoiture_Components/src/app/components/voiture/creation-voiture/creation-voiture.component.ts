import { Component, Input } from '@angular/core';
import { Voiture } from 'src/app/models/voiture'; // Importez le modèle de voiture
import { VoitureService } from 'src/app//services/voiture.service';// Importez le service de voiture
import { VoitureComponent } from '../voiture.component';


@Component({
  selector: 'app-creation-voiture',
  templateUrl: './creation-voiture.component.html',
  styleUrls: ['./creation-voiture.component.css']
})
export class CreationVoitureComponent {
  
  auth = false;
  
  

  voitureData: Voiture = new Voiture();// Déclarez une instance de la classe Voiture pour stocker les données du formulaire
  isCreationSuccessful: boolean = false;
  errorMessage: string = '';

  constructor(private voitureService: VoitureService) { }

  ngOnInit(): void {
  }

  // Méthode appelée lors de la soumission du formulaire
  creerVoiture() {
    // Appelez la méthode createVoiture du service pour enregistrer la nouvelle voiture
    this.voitureService.createVoiture(this.voitureData).subscribe(
      response => {
        this.isCreationSuccessful = true;
        this.errorMessage = '';
        // Réinitialiser les données de la voiture après la création réussie
        this.voitureData = new Voiture();
      },
      error => {
        this.isCreationSuccessful = false;
        this.errorMessage = 'Erreur lors de la création de la voiture.';
        console.error(error);
      }
    );
  }
}
