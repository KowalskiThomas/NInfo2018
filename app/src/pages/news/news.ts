import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})
export class NewsPage {


  articles: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.http.get('https://newsapi.org/v2/everything?q=evry&sortBy=publishedAt&apiKey=ea9f131cc3984d3a9fab35ef003aca8c').map(res => res.json()).subscribe(data => {
      this.articles = data.articles;
      console.log(this.articles);
    });

  }
}
