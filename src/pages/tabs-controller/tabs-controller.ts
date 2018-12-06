import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { EventPage } from '../event/event';
import { NewsPage } from '../news/news';
import { ProfilPage } from '../profil/profil';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = HomePage;
  tab2Root: any = EventPage;
  tab3Root: any = NewsPage;
  tab4Root: any = ProfilPage;
  constructor(public navCtrl: NavController) {
  }
  
}
