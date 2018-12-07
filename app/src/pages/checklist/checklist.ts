import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChecklistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-checklist',
  templateUrl: 'checklist.html',
})
export class ChecklistPage {

  public assocItem: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.setItems();
  }

  setItems() {
    this.assocItem = [
      {
        checklistTitle: 'Chef, as-tu tes chaussettes ?',
      },
      {
        checklistTitle: 'T\'as pas oublié ton portable ?',
      },
      {
        checklistTitle: 'T\'es sûr d\'avoir les clés de chez toi ?',
      },
      {
        checklistTitle: 'T\'as pensé à ta veste et à ton pull ?',
      }
    ];
  }

}
