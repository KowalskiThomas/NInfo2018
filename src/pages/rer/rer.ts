import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-rer',
  templateUrl: 'rer.html',
})
export class RerPage {

  trains: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.trains = null;
    this.http.get('http://51.75.94.199:5000/rer/next?test=true').map(res => res.json()).subscribe(data => {
      this.trains = data.response;
    });
    console.log(this.trains);
  }

}
