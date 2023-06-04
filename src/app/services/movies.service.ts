import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaMDB } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';

const URL= environment.url;
const apiKey=environment.apikey;

@Injectable({
  providedIn: 'root'
})



export class MoviesService {

  constructor(private http:HttpClient) { }
 
  private ejecutarQuery<T>(query:string ){
   
   query=URL+query;
   query+=`?api_key=${apiKey}`;
   return this.http.get<T>(query);
  }

  getFeature(){

   return this.ejecutarQuery<RespuestaMDB>(`/discover/movie`);

  }

}
