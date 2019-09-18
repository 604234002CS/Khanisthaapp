import { MoviesProvider } from './../../providers/movies/movies';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  detail: any = [];
  imgPath = 'https://image.tmdb.org/t/p/original/';


  constructor(public navCtrl: NavController, public navParams: NavParams,public moviedetail: MoviesProvider ) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ');
    this.detail = this.navParams.data;
    console.log(this.detail);
  };



  }

