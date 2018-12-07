import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-echange-internationaux',
  templateUrl: 'echange-internationaux.html'
})
export class EchangeInternationauxPage {

  public exchangeItem: Array<any>

  constructor(public navCtrl: NavController) {
  }

  ngOnInit() {
    this.setItems();
  }

  setItems() {
    this.exchangeItem = [
      {
        searchTag: 'Allemagne',
        University: 'knsdkqsnd',
        categoryString: 'Diplome : 1',
        imageName: 'Allemagne'
      },
      {
        searchTag: 'Australie',
        University: 'knsdkqsnd',
        categoryString: 'Diplome : ',
        imageName: 'australie'
      },
      {
        searchTag: 'autriche',
        University: 'knsdkqsnd',
        categoryString: 'Diplome : ',
        imageName: 'autriche'
      },
      {
        searchTag: 'belgique',
        University: 'knsdkqsnd',
        categoryString: 'Diplome : ',
        imageName: 'belgique'
      },
      {
        searchTag: 'bresil',
        University: 'knsdkqsnd',
        categoryString: 'Diplome : ',
        imageName: 'bresil'
      },
      {
        searchTag: 'Cambodge',
        University: 'knsdkqsnd',
        categoryString: 'Diplome : ',
        imageName: 'Cambodge'
      },
      {
        searchTag: 'canada',
        University: 'knsdkqsnd',
        categoryString: 'Diplome : ',
        imageName: 'canada'
      },
      {
        searchTag: 'chine',
        University: 'knsdkqsnd',
        categoryString: 'Diplome : ',
        imageName: 'chine'
      },
      {
        searchTag: 'colombie',
        University: 'knsdkqsnd',
        categoryString: 'Diplome : ',
        imageName: 'colombie'
      }, {
        searchTag: 'Croatie',
        University: 'knsdkqsnd',
        categoryString: 'Diplome : ',
        imageName: 'Croatie'
      }, {
        searchTag: 'Emirat',
        University: 'knsdkqsnd',
        categoryString: 'Diplome : ',
        imageName: 'Emirat'
      }, {
        searchTag: 'Equateur',
        University: 'knsdkqsnd',
        categoryString: 'Diplome : ',
        imageName: 'Equateur'
      }, {
        searchTag: 'Espagne',
        University: 'knsdkqsnd',
        categoryString: 'Diplome : ',
        imageName: 'Espagne'
      }, {
        searchTag: 'Etat-unis',
        University: 'knsdkqsnd',
        categoryString: 'Diplome : ',
        imageName: 'Etat-unis'
      }, {
        searchTag: 'Grece',
        University: 'knsdkqsnd',
        categoryString: 'Diplome : ',
        imageName: 'Grece'
      }, {
        searchTag: 'Irlande',
        University: 'knsdkqsnd',
        categoryString: 'Diplome : ',
        imageName: 'Irlande'
      }, {
        searchTag: 'Italie',
        University: 'knsdkqsnd',
        categoryString: 'Diplome : ',
        imageName: 'Italie'
      }, {
        searchTag: 'Japon',
        University: 'knsdkqsnd',
        categoryString: 'Diplome : ',
        imageName: 'Japon'
      }, {
        searchTag: 'lituanie',
        University: 'knsdkqsnd',
        categoryString: 'Diplome : ',
        imageName: 'lituanie'
      }, {
        searchTag: 'Malaisie',
        University: 'knsdkqsnd',
        categoryString: 'Diplome : ',
        imageName: 'Malaisie'
      }, {
        searchTag: 'Maroc',
        University: 'knsdkqsnd',
        categoryString: 'Diplome : ',
        imageName: 'Maroc'
      }, {
        searchTag: 'Norvège',
        University: 'knsdkqsnd',
        categoryString: 'Diplome : ',
        imageName: 'norvege'
      }, {
        searchTag: 'nouvelle_zelande',
        University: 'knsdkqsnd',
        categoryString: 'Diplome : ',
        imageName: 'nouvelle_zelande'
      },
      {
        searchTag: 'royaume-uni',
        University: 'knsdkqsnd',
        categoryString: 'Diplome : ',
        imageName: 'royaume-uni'
      }, {
        searchTag: 'Senegal',
        University: 'knsdkqsnd',
        categoryString: 'Diplome : ',
        imageName: 'Senegal'
      }, {
        searchTag: 'singapour',
        University: 'knsdkqsnd',
        categoryString: 'Diplome : ',
        imageName: 'singapour'
      }, {
        searchTag: 'slovenie',
        University: 'knsdkqsnd',
        categoryString: 'Diplome : ',
        imageName: 'slovenia'
      }, {
        searchTag: 'taiwan',
        University: 'knsdkqsnd',
        categoryString: 'Diplome : ',
        imageName: 'taiwan'
      }, {
        searchTag: 'tunisie',
        University: 'knsdkqsnd',
        categoryString: 'Diplome : ',
        imageName: 'tunisie'
      }, {
        searchTag: 'vietman',
        University: 'knsdkqsnd',
        categoryString: 'Diplome : ',
        imageName: 'vietman'
      }
    ]
  }

  filterItems(ev: any) {
    this.setItems();
    let val = ev.target.value;

    if (val && val.trim() !== '') {
      this.exchangeItem = this.exchangeItem.filter((item) => {
        return item.searchTag.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
    }
  }



}
