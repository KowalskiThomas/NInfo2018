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
            if (this.catchPhrase === "") this.catchPhrase = data;
            else if (this.catchPhrase !== data && this.tmp === 0) {
              this.drunkTime = this.drunkTime.toLocaleString();
              this.tmp++;
            }
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  initialise() {
    this.drunkTime = "";
    console.log(this.drunkTime);
  }

}
