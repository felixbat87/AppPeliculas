import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaMDB } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }

  getFeature(){

   return this.http.get<RespuestaMDB>('https://api.themoviedb.org/3/discover/movie?api_key=686c191a44235b247a94b33bfb26afdc');

  }

}
