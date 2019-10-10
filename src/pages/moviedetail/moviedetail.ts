
import { MoviesProvider } from './../../providers/movies/movies';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController} from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { SocialSharing } from '@ionic-native/social-sharing';


/**
 * Generated class for the MoviedetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-moviedetail',
  templateUrl: 'moviedetail.html',
})
export class MoviedetailPage {

detail: any = [];
movie: any;
movieDetails: any;
backdrop_path: any;
geners: any;
videos: any = [];
Budget: any;
status: any;
revenue: any;
imgPath = 'https://image.tmdb.org/t/p/original/';
playing: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,public moviedetail: MoviesProvider,
    private tts: TextToSpeech,private socialSharing: SocialSharing,private actionSheetContronller: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoviedetailPage');
    this.detail = this.navParams.data;
    console.log(this.detail);
  };

  openVideo(key){
    this.navCtrl.push('VideoPage',key);
  }

  talk(textOrOptions:string){
    this.tts.speak(textOrOptions);
  }
  stop(){
    this.tts.speak("").then((value)=>{
    this.playing=false;
    });
    }

  share(){
    let title = this.detail.title;
    let overview = this.detail.overview;
    this.socialSharing.shareViaFacebook('Moive title'+title+':'+overview);
  }

}
  


  




  


