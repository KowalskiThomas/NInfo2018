import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  const catchPhrase = "";

  constructor(private alertCtrl: AlertController) {

  }

  showPrompt() {
    const prompt = this.alertCtrl.create({
      title: "Test ton taux d'alcoolémie !",
      message: "Quelle est ta phrase préférée ?",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.catchPhrase = data;
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  

}
