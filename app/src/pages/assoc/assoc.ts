import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-assoc',
  templateUrl: 'assoc.html'
})

export class AssocPage {

  public assocItem: Array<any>;

  constructor(public navCtrl: NavController) {
  }

  ngOnInit() {
    this.setItems();
  }

  setItems() {
    this.assocItem = [
      {
        searchTag: '#Insanitiie #Sport #Pohan',
        assocTitle: 'Insanitiie',
        assocSlogan: 'Big deeper',
        assocPresImage: 'assets/img/enDTVZMtSnWXMazQwnPR_pohan.PNG',
      },
      {
        searchTag: '#Realitiie #VR Rhum',
        assocTitle: 'realitiie',
        assocSlogan: '« No escape from RealitIIE … »',
        assocPresImage: 'assets/img/2lq6Lh8RCGVdRNQNdaIE_rhum.PNG',
      },
      {
        searchTag: '#DIESE #junior-entreprise #hansen',
        assocTitle: 'DIESE',
        assocSlogan: '«Where progress begins»',
        assocPresImage: 'assets/img/H22zjQFaTyWfsrFodyx0_hansen.PNG',
      },
      {
        searchTag: '#IInove #mirage',
        assocTitle: 'IInove',
        assocSlogan: '«Where progress begins»',
        assocPresImage: 'assets/img/hENQkDxuS3mgW56Tq0X6_mirage.PNG',
      },
      {
        searchTag: '#C-19',
        assocTitle: ' C-19',
        assocSlogan: '«Where progress begins»',
        assocPresImage: 'assets/img/GMdUy9kRqeyT3apZtSZt_c-19.png',
      }
      ,
      {
        searchTag: '#Forum #ward',
        assocTitle: 'Forum',
        assocSlogan: '«Prends ta douille, on fait plus de chouilles»',
        assocPresImage: 'assets/img/VmNLLCogTOyk0WYhANc5_ward.PNG',
      }
      , {
        searchTag: '#Arise #Kodra #reseau',
        assocTitle: 'Arise',
        assocSlogan: ' «Le plus gros virus est entre la chaise et le clavier»',
        assocPresImage: 'assets/img/hPZyRqmzSxKupyyz72GB_kodra.PNG',
      },
      {
        searchTag: ' #Securitiie #Sécurité #Syngard ',
        assocTitle: 'SecutitIIE',
        assocSlogan: '«Sdufhtx lo hwdlw jdb»',
        assocPresImage: 'assets/img/Gg8qc3PITmy82MA4Rw47_syngard.PNG',
      },
      {
        searchTag: ' #Liien #Ilée ',
        assocTitle: 'Liien',
        assocSlogan: '«Caliiente années après années !»',
        assocPresImage: 'assets/img/aoYHBBwwQzitCGXiuASe_ile.PNG',
      },
      {
        searchTag: '# Origine #Robotique #Chrom',
        assocTitle: 'ORiGiNe',
        assocSlogan: '«Bricoler, c’est tout casser pour réparer»',
        assocPresImage: 'assets/img/HozDz6QSd6o5aybNdAJc_chrom.PNG',
      },
      {
        searchTag: ' #IIE++ #PLS #Kassoeur ',
        assocTitle: 'IIE ++',
        assocSlogan: ' «Si t’es --, viens en ++»',
        assocPresImage: 'assets/img/z20aoPITRXKylxrkdKmo_kassoeur.PNG',
      },
      {
        searchTag: '#Financiie #Thune #Gabb',
        assocTitle: 'FinancIIE',
        assocSlogan: '«Le pouvoir est entre vos mains»',
        assocPresImage: 'assets/img/iBOUZ4zSXCPa8sLvqdYb_gabb.PNG',
      },
      {
        searchTag: ' ',
        assocTitle: 'HumanIIE',
        assocSlogan: '«Quel est le pays où l’on ne bronze pas du nez ?»',
        assocPresImage: 'assets/img/xs5AgWv4QWenXe9PdNNy_mwaii.PNG',
      },
      {
        searchTag: '#Sourire #Cookie #Ali #Younes',
        assocTitle: 'SourIIrE',
        assocSlogan: '«Mini-cookie distributeur de SourIIrE»',
        assocPresImage: 'assets/img/ie1nsGXjSHmKHTB4sXSZ_AliYouns.PNG',
      },
      {
        searchTag: '#BDS #Sport #Mapu',
        assocTitle: 'BDS',
        assocSlogan: '«Plus culturés que le BDA»',
        assocPresImage: 'assets/img/NyaCW0x1SiyJD1bHVBRy_mapu.PNG',
      },
      {
        searchTag: '#Guiilde #rezty',
        assocTitle: 'Guiilde',
        assocSlogan: '«When the DM smiles, it’s already too late»',
        assocPresImage: 'assets/img/q24xnkqhQNu83DOHpiHK_rezty.PNG',
      },
      {
        searchTag: '#Galaxiie #Stone',
        assocTitle: 'GalaxIIE',
        assocSlogan: '«Georges Abitbol, l’homme le plus classe du monde…»',
        assocPresImage: 'assets/img/lyQx5k2mRqS9KGz7FCFo_stone.PNG',
      },
      {
        searchTag: '#NightIIEs #Jacqueline #Pandora',
        assocTitle: 'NightIIEs',
        assocSlogan: ' «Drop the beat!»',
        assocPresImage: 'assets/img/IYBRilkT7yxRdGmgceUg_JacquelinePandorha.PNG',
      },
      {
        searchTag: '#Muzzik #Baggins ',
        assocTitle: 'Muzzik',
        assocSlogan: '«Mets plus de retour sur le triangle s’il te plaît»',
        assocPresImage: 'assets/img/gs4nNUB1SZC2ooRXwste_baggins.PNG',
      },
      {
        searchTag: '#CCCM #Drascma #Cuivre #Moustache',
        assocTitle: 'CCCM',
        assocSlogan: '«Cuivres cuivres cuivres, Moustache !»',
        assocPresImage: 'assets/img/KHC8JzsuSMuqFinqULLb_drascma.PNG',
      },
      {
        searchTag: '#Vocaliise #Ghorhahm',
        assocTitle: 'VocalIIsE',
        assocSlogan: '«C’est mignon de se faire traiter de con en chanson. »',
        assocPresImage: 'assets/img/fJSWoDTPQ7kEdvcZ6tGT_ghorhahm.PNG',
      },
      {
        searchTag: '#Dansiie #Chacky',
        assocTitle: 'DansIIE',
        assocSlogan: ' «Let’s groove tonight!»',
        assocPresImage: 'assets/img/quXJ523lSa6F82MaKIdz_chacky.PNG',
      },
      {
        searchTag: '#Houdiniie #Magie #Aersyo',
        assocTitle: 'HoudinIIE',
        assocSlogan: '«Notre meilleur tour, c’est de disparaître»',
        assocPresImage: 'assets/img/LHwYK4QTgqVYxzwtGUIe_aersyo.PN',
      },
      {
        searchTag: '#Comdiie',
        assocTitle: 'ComDIIE',
        assocSlogan: '«Ah non, c’est un peu court, jeune homme ! ...»',
        assocPresImage: '',
      },
      {
        searchTag: ' #i-TV #video #Rosbifle ',
        assocTitle: ' i-TV',
        assocSlogan: '«Get Rec O-t »',
        assocPresImage: 'assets/img/SW0Zj0w9QY2tHBITFHYs_Rosbifle.PNG',
      },
      {
        searchTag: '#CiD #Gimp #Photoshop #Ward',
        assocTitle: 'CiD',
        assocSlogan: '«Les rageux diront Photoshop»',
        assocPresImage: 'assets/img/5ySoYIxuQS2zz6Z7qMlj_ward.PNG',
      },
      {
        searchTag: ' #Bureau #Arts #BDA #Rainman ',
        assocTitle: 'Bureau des Arts - BDA',
        assocSlogan: '«Le lard et la manière»',
        assocPresImage: 'assets/img/sJOcMZSFSWeZj2zGiokG_rainman.PNG',
      },
      {
        searchTag: '#Lumiiere #Choubi',
        assocTitle: 'LumIIEre',
        assocSlogan: '«And that’s just one small fraction of the main attraction»',
        assocPresImage: 'assets/img/NPucHSNDRA2xlAIpl5R5_choubi.PNG',
      },
      {
        searchTag: '#Iimonde #Tedeum',
        assocTitle: 'IImondE',
        assocSlogan: ' «Vox populi, vox Dei »',
        assocPresImage: 'assets/img/tinDQsdMQRcDwRT882fA_TeDeum.PNG',
      },
      {
        searchTag: '#RadIoactIvE #Iko',
        assocTitle: 'RadIoactIvE',
        assocSlogan: '«C’est l’heure de l’érocast … »',
        assocPresImage: 'assets/img/RvPYCOpfSXz0jMYvUKQQ_iko.PNG',
      },
      {
        searchTag: '#BD-SF #Choubi ',
        assocTitle: 'BD-SF',
        assocSlogan: '«The turtle moves!»',
        assocPresImage: 'assets/img/02u4HUi5QO2E5oPflBVA_choubi.PNG',
      },
      {
        searchTag: '#CraftIIE #Eo',
        assocTitle: 'CraftIIE',
        assocSlogan: '«C’est quoi une bissectrice ? »',
        assocPresImage: 'assets/img/nJFRQMrXThiv9888LuBi_Eo.PNG',
      }, {
        searchTag: '#Filigrane #Karn',
        assocTitle: 'FiLiGRANe',
        assocSlogan: '«C’est l’heure du duel !»',
        assocPresImage: 'assets/img/XCTJY1hoRAKIR2R8EOFy_karn.PNG',
      }, {
        searchTag: '#Siieste #gabb',
        assocTitle: 'SIIestE',
        assocSlogan: '«Trop de repos n’a jamais tué personne»',
        assocPresImage: 'assets/img/9AxmnP4iRgeMjXizm8Ot_gabb.PNG',
      }, {
        searchTag: '#EchequIIE #Ping',
        assocTitle: 'EchequIIE',
        assocSlogan: '« Jeu des rois et roi des jeux ! »',
        assocPresImage: 'assets/img/nZg5tKIgSLi3CG8CiZYE_ping.PNG',
      }, {
        searchTag: '#bakaClub #Krocoh',
        assocTitle: 'Bakaclub',
        assocSlogan: ' «Et vous, vous êtes plutôt µ’s ou Aqours ?»',
        assocPresImage: 'assets/img/8QZ4D8ZWQtK1diplli7b_Krocoh.PNG',
      }, {
        searchTag: ' #Lanpartiie #Téka #Cloud ',
        assocTitle: 'LanPartIIE',
        assocSlogan: '« Life is an ez game ! »',
        assocPresImage: 'assets/img/A0ka4i0QSlm5DiYkg0IM_TkaCloud.PNG',
      }, {
        searchTag: ' #Sciience #Docteur  ',
        assocTitle: '  ScIIEnce',
        assocSlogan: '« La science te guide »',
        assocPresImage: 'assets/img/oRrHC4d7RzKYOc7DSriQ_docteur.PNG',
      }, {
        searchTag: '#Cuisiine #Morphy',
        assocTitle: 'CuIsInE',
        assocSlogan: '« C’est gourmand, c’est croquant !»',
        assocPresImage: 'assets/img/UaI8oDjYShWAor5D5mKt_morphy.PNG',
      }, {
        searchTag: '#OenologIIE #Gub #spoutnik',
        assocTitle: 'OenologIIE',
        assocSlogan: '« In vino veritas »',
        assocPresImage: 'assets/img/SkhYwMBgRqoGvclzYz0P_gubspoutnik.PNG',
      }, {
        searchTag: '#Aperal #Pichet ',
        assocTitle: 'Apéral',
        assocSlogan: '«51 je t’aime, j’en boirais des tonneaux et des tonneaux ! »',
        assocPresImage: 'assets/img/qFP6PkVbQKLRO0Uk9yww_Pichet.PNG',
      }, {
        searchTag: '#MisterIIE #Gabb',
        assocTitle: 'MisterIIE',
        assocSlogan: '« Who run the world ? Girls ! »',
        assocPresImage: 'assets/img/m5lHYSGCT9Kz94Mq2EPf_gabb.PNG'
      }, {
        searchTag: '#Ecologiie #Stone',
        assocTitle: ' EcologIIE',
        assocSlogan: '« Le dire c’est bien, le faire c’est mieux ! »',
        assocPresImage: 'assets/img/vvI0Lp0qRqmJjZsnEOq2_stone.PNG',
      }
    ];
  }



  filterItems(ev: any) {
    this.setItems();
    let val = ev.target.value;

    if (val && val.trim() !== '') {
      this.assocItem = this.assocItem.filter((item) => {
        return item.searchTag.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
    }
  }
}

