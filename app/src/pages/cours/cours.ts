import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Semestre1Page } from '../semestre1/semestre1';
import { Semestre2Page } from '../semestre2/semestre2';
import { Semestre3Page } from '../semestre3/semestre3';
import { Semestre4Page } from '../semestre4/semestre4';
import { Semestre5Page } from '../semestre5/semestre5';

@Component({
  selector: 'page-cours',
  templateUrl: 'cours.html'
})
export class CoursPage {

  constructor(public navCtrl: NavController) {
  }
  goToSemestre1(params){
    if (!params) params = {};
    this.navCtrl.push(Semestre1Page);
  }goToSemestre2(params){
    if (!params) params = {};
    this.navCtrl.push(Semestre2Page);
  }goToSemestre3(params){
    if (!params) params = {};
    this.navCtrl.push(Semestre3Page);
  }goToSemestre4(params){
    if (!params) params = {};
    this.navCtrl.push(Semestre4Page);
  }goToSemestre5(params){
    if (!params) params = {};
    this.navCtrl.push(Semestre5Page);
  }
}
