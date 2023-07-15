import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PeliculaDetalle, RespuestaCredits, RespuestaMDB } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';


const URL= environment.url;
const apiKey=environment.apikey;
const complement=environment.complement;
const populares= environment.populares;
const page=environment.page;

@Injectable({
  providedIn: 'root'
})



export class MoviesService {
 private popularesPage =0;
 query:string='';
  constructor(private http:HttpClient) { }
 
  private ejecutarQuery<T>(query:string ){
   
   query=URL+query;
   query+=`?api_key=${apiKey}`;
   return this.http.get<T>(query);
  }

  getPopulares(){


    this.popularesPage++;
    const query=`${URL}${complement}?api_key=${apiKey}${populares}${page}${this.popularesPage}`;
    return this.http.get<RespuestaMDB>(query);

  }

  getFeature(){

   return this.ejecutarQuery<RespuestaMDB>(`/discover/movie`);

  }


  getPeliculaDetalle(id:any){


    const query=`${URL}/movie/${id}?api_key=${apiKey}`;
    return this.http.get<PeliculaDetalle>(query);
   

  }


  getActoresPelicula(id:any){


    const query=`${URL}/movie/${id}/credits?api_key=${apiKey}`;
    return this.http.get<RespuestaCredits>(query);
   

  }

}
