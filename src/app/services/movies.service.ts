import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaMDB } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';


const URL= environment.url;
const apiKey=environment.apikey;
const complement=environment.complement;
const populares= environment.populares;

@Injectable({
  providedIn: 'root'
})



export class MoviesService {
 query:string='';
  constructor(private http:HttpClient) { }
 
  private ejecutarQuery<T>(query:string ){
   
   query=URL+query;
   query+=`?api_key=${apiKey}`;
   return this.http.get<T>(query);
  }

  getPopulares(){

    const query=`${URL}${complement}?api_key=${apiKey}${populares}`;
    return this.http.get<RespuestaMDB>(query);

  }

  getFeature(){

   return this.ejecutarQuery<RespuestaMDB>(`/discover/movie`);

  }

}
