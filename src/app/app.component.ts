import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CoursPage } from '../pages/cours/cours';
import { Semestre1Page } from '../pages/semestre1/semestre1';
import { Semestre2Page } from '../pages/semestre2/semestre2';
import { Semestre3Page } from '../pages/semestre3/semestre3';
import { Semestre4Page } from '../pages/semestre4/semestre4';
import { Semestre5Page } from '../pages/semestre5/semestre5';
import { AssocPage } from '../pages/assoc/assoc';
import { TrombiPage } from '../pages/trombi/trombi';
import { EdtPage } from '../pages/edt/edt';
import { EdtDisplayPage } from '../pages/edtDisplay/edtDisplay';
import { ServicePage } from '../pages/service/service';
import { EchangeInternationauxPage } from '../pages/echange-internationaux/echange-internationaux';
import { FormationPage } from '../pages/formation/formation';
import { AdministrationPage } from '../pages/administration/administration';
import { CommunicationPage } from '../pages/communication/communication';
import { VieEtudiantePage } from '../pages/vie-etudiante/vie-etudiante';
import { LogementColocPage } from '../pages/logement-coloc/logement-coloc';


import { HomePage } from '../pages/home/home';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
  rootPage: any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToCours(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(CoursPage);
  } goToSemestre1(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(Semestre1Page);
  } goToSemestre2(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(Semestre2Page);
  } goToSemestre3(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(Semestre3Page);
  } goToSemestre4(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(Semestre4Page);
  } goToSemestre5(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(Semestre5Page);
  } goToAssoc(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(AssocPage);
  } goToTrombi(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(TrombiPage);
  } goToEdt(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(EdtPage);
  } goToEdtDisplay(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(EdtDisplayPage);
  } goToService(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(ServicePage);
  } goToEchangeInternationaux(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(EchangeInternationauxPage);
  } goToFormation(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(FormationPage);
  } goToAdministration(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(AdministrationPage);
  } goToCommunication(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(CommunicationPage);
  } goToVieEtudiante(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(VieEtudiantePage);
  } goToLogementColoc(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(LogementColocPage);
  } goToHome(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
  }
}
