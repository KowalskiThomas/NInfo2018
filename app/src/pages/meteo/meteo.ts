
import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-meteo',
  templateUrl: 'meteo.html',
})
export class MeteoPage {
  meteos: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.http.get('http://51.75.94.199:5000/weather/48.6238,2.4296').map(res => res.json()).subscribe(data => {
      this.meteos = data.response;
      console.log(this.meteos);
    });

  }

}
