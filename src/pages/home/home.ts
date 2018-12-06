import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  const catchPhrase = "";
  const drunkTime = new Date();
  const tmp = 0;

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
            if (this.catchPhrase === "") {
              this.catchPhrase = data.title;
              console.log(this.catchPhrase);
            }
            else if (this.catchPhrase !== data.title && this.tmp === 0) {
              this.drunkTime = this.drunkTime.toLocaleString();
              this.tmp++;
              document.getElementById('dead').removeAttribute('disabled');
              console.log(this.drunkTime);
              console.log(this.tmp);
            }
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  showDrunk() {
    const prompt = this.alertCtrl.create({
      title: "Heure du décès",
      message: "Le verre de trop a été pris vers : \n" + drunkTime,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            console.log('OK clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  initialise() {
    this.drunkTime = "";
    console.log('Initialise clicked');
  }

}
