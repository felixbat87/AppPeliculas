import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';
import { PeliculaDetalle } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  peliculas:PeliculaDetalle[]=[];
  private _storage: Storage | null = null;

  constructor(private storage: Storage) { 

    this.init();
  }

  async init() {
    
    const storage = await this.storage.create();
    this._storage = storage;
  
  }
 
  guardarPelicula(pelicula:PeliculaDetalle){

   
    this.peliculas.push(pelicula);
    this._storage?.set('peliculas', this.peliculas);
   
  }

}
