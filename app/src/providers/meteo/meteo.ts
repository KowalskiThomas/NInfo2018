import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MeteoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MeteoProvider {

    constructor(public http: HttpClient) {
    }

    getMeteo() {
        return this.http.get('http://51.75.94.199:5000/weather/48.6238,2.4296');
    }
}
