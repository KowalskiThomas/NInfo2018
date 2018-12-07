import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})
export class NewsPage {

  //to encrypt in sha-256
  apiKey = 'ea9f131cc3984d3a9fab35ef003aca8c'

  endpointList = [
    {
      endpointUrl: '/v2/top-headline'
    },
    {
      endpointUrl: '/v2/everything'
    },
    {
      endpointUrl: 'v2/sources'
    }
  ]

  request: any;
  baseUrl = 'https://newsapi.org/';
  queryWord = 'evry';


  constructApiRequest() {
    this.request = this.baseUrl
      + this.endpointList[0].endpointUrl
      + '?q=' + this.queryWord
      + '&country=france' +
      + '&apiKey=' + this.apiKey;

    return this.request;
  }



  constructor(public navCtrl: NavController) {
    console.log(this.constructApiRequest());
  }

}
