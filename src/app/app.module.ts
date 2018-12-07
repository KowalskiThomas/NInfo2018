/* App module  */
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';

/* App page */
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewsPage } from '../pages/news/news';
import { EventPage } from '../pages/event/event';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { ProfilPage } from '../pages/profil/profil';
import { VieEtudiantePage } from '../pages/vie-etudiante/vie-etudiante';
import { CoursPage } from '../pages/cours/cours';
import { AssocPage } from '../pages/assoc/assoc';
import { TrombiPage } from '../pages/trombi/trombi';
import { EdtPage } from '../pages/edt/edt';
import { EdtDisplayPage } from '../pages/edtDisplay/edtDisplay';
import { CommunicationPage } from '../pages/communication/communication';
import { ServicePage } from '../pages/service/service';
import { EchangeInternationauxPage } from '../pages/echange-internationaux/echange-internationaux';
import { FormationPage } from '../pages/formation/formation';
import { AdministrationPage } from '../pages/administration/administration';
import { LogementColocPage } from '../pages/logement-coloc/logement-coloc';
import { Semestre1Page } from '../pages/semestre1/semestre1';
import { Semestre2Page } from '../pages/semestre2/semestre2';
import { Semestre3Page } from '../pages/semestre3/semestre3';
import { Semestre4Page } from '../pages/semestre4/semestre4';
import { Semestre5Page } from '../pages/semestre5/semestre5';
import { AlcoolometrePage } from '../pages/alcoolometre/alcoolometre';
import { RerPage } from '../pages/rer/rer';

/* App component */
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Firebase } from '@ionic-native/firebase';
import { TrainProvider } from '../providers/train/train';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewsPage,
    EventPage,
    TabsControllerPage,
    ProfilPage,
    VieEtudiantePage,
    CoursPage,
    AssocPage,
    TrombiPage,
    EdtPage,
    EdtDisplayPage,
    CommunicationPage,
    ServicePage,
    EchangeInternationauxPage,
    FormationPage,
    AdministrationPage,
    LogementColocPage,
    Semestre1Page,
    Semestre2Page,
    Semestre3Page,
    Semestre4Page,
    Semestre5Page,
    AlcoolometrePage,
    Rer
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewsPage,
    EventPage,
    TabsControllerPage,
    ProfilPage,
    VieEtudiantePage,
    CoursPage,
    AssocPage,
    TrombiPage,
    EdtPage,
    EdtDisplayPage,
    CommunicationPage,
    ServicePage,
    EchangeInternationauxPage,
    FormationPage,
    AdministrationPage,
    LogementColocPage,
    Semestre1Page,
    Semestre2Page,
    Semestre3Page,
    Semestre4Page,
    Semestre5Page,
    AlcoolometrePage,
    Rer
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    TrainProvider
  ]
})
export class AppModule { }
