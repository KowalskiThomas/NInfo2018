import { Observable } from 'rxjs/Observable';
import { MeteoProvider } from './../../providers/meteo/meteo';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



/**
 * Generated class for the MeteoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meteo',
  templateUrl: 'meteo.html',
})
export class MeteoPage {
  meteo: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public Meteo: MeteoProvider) {
    this.meteo = this.Meteo.getMeteo();
  }

}
