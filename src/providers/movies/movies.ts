import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MoviesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoviesProvider {
  searchMovie(val: any) {
    throw new Error("Method not implemented.");
  }
  
  public baseURL = 'https://api.themoviedb.org/3/';
  public apiKey = 'api_key=7552e9af1bfb832332c3005ada3d28a7';


  constructor(public http: HttpClient) {
    console.log('Hello MoviesProvider Provider');
  }
  getNow(){
    const url = this.baseURL + 'movie/now_playing?' + this.apiKey;
    return this.http.get(url);
  }

  

}
