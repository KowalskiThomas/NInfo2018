
import { Component } from '@angular/core';
import { NavController, List } from 'ionic-angular';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';



@Component({
    selector: 'page-edt',
    templateUrl: 'edt.html'
})
export class EdtPage {

    /* construct 1A choice */
    firstYear = {
        year: '1',
        group: '',
        groupcom: '',
        langue: '',
        format: 'json'
    };
    /* construct 2A choice  */
    secondYear = {
        year: '2',
        group: '',
        groupcom: '',
        langue: '',
        options_2A_1: '',
        options_2A_2: '',
        options_2A_3: '',
        options_2A_4: '',
        options_2A_5: '',
        options_2A_6: '',
        tronc_commun: '',
        format: 'json'
    }
    /* conctruct 3A choice */
    thirdYear = {
        year: '3',
        group: '',
        groupcom: '',
        langue: '',
        options_3A_1: '',
        options_3A_3: '',
        options_3A_5: '',
        format: 'json'
    };

    items: any;

    /* URL de base de l'emploie du temps */
    base_url = 'https://www.iiens.net/etudiants/edt.php'

    /* construction de la requete pour l'emploie du temps des 1A */
    url_1A: any;

    /* construction de la requete pour l'emploie du temps des 2A */
    url_2A: any;

    /* construction de la requete pour l'emploie du temps des 3A */
    url_3A: any;


    /* Test affichage console js : a remplacer par fonction de requete */
    constructUrl_1A() {
        this.url_1A = this.base_url
            + '?year=' + this.firstYear.year
            + '&gp%5B%5D=' + this.firstYear.group
            + '&gpcomm%5B%5D=' + this.firstYear.groupcom
            + '&format=' + this.firstYear.format
            + '&langue%5B%5D=' + this.firstYear.langue
            + '&ts=1537216639';

        return this.url_1A;
    }
    constructUrl_2A() {
        this.url_2A = this.base_url
            + '?year=' + this.secondYear.year
            + '&gp%5B%5D=' + this.secondYear.group
            + '&gpcomm%5B%5D=' + this.secondYear.groupcom
            + '&format=' + this.secondYear.format
            + '&langue%5B%5D=' + this.secondYear.langue
            + '&op2%5B%5D=' + this.secondYear.options_2A_1
            + '&op2%5B%5D=' + this.secondYear.options_2A_2
            + '&op2%5B%5D=' + this.secondYear.options_2A_3
            + '&op2%5B%5D=' + this.secondYear.options_2A_4
            + '&op2%5B%5D=' + this.secondYear.options_2A_5
            + '&op2%5B%5D=' + this.secondYear.options_2A_6
            + '&tc=Option+tc+' + this.secondYear.tronc_commun
            + '&ts=1537216639';

        return this.url_2A;
    }
    constructUrl_3A() {
        this.url_3A = this.base_url
            + '?year=' + this.thirdYear.year
            + '&gp%5B%5D=' + this.thirdYear.group
            + '&gpcomm%5B%5D=' + this.thirdYear.groupcom
            + '&format=' + this.thirdYear.format
            + '&langue%5B%5D=' + this.thirdYear.langue
            + '&op3%5B%5D=' + this.thirdYear.options_3A_1
            + '&op3%5B%5D=' + this.thirdYear.options_3A_3
            + '&op3%5B%5D=' + this.thirdYear.options_3A_5
            + '&ts=1537216639';

        return this.url_3A;
    }

    jsonData: any;

    /* GET data from constructed Url (via form) */

    coursQuantity = [];
    days = [];
    weekData = [[]];
    coursLundi = [];
    mapq = [];


    getData(url: string) {
        this.http.get(url).map(res => res.json()).subscribe(data => {
            this.jsonData = data; /* All the json data */
            console.log(this.jsonData);
            /* DATA PARSING */

            /* jour */

            for (var _i = 0; _i <= 4; _i++) {
                this.days.push(data[_i]); /* days */
                this.coursQuantity.push(data[_i].eventslist); /* list of the number of course for each days */
            }
            console.log(this.days);
            console.log(this.coursQuantity);


            for (var _days = 0; _days <= 4; _days++) {
                this.mapq.push(this.coursQuantity[_days].map(x => 'q' + x));
            }
            console.log(this.mapq);

        });
    }

    constructor(public navCtrl: NavController, public http: Http) { }

}

