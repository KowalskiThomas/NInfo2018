import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the TrafficPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-traffic',
  templateUrl: 'traffic.html',
})
export class TrafficPage {
  trafficsMetro: Array<any> = [];
  trafficsRER: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.http.get('https://api-ratp.pierre-grimaud.fr/v3/traffic?_format=json&fbclid=IwAR1zvKSxuxfaAHU0uGRht69yvv5-tyUQpB1HY0KwFd3yawg3JyccnPBxBkM').map(res => res.json()).subscribe(data => {
      this.trafficsMetro = data.result.metros;
      this.trafficsRER = data.result.rers
      console.log(this.trafficsMetro);
      console.log(this.trafficsRER);
    });

  }


}
