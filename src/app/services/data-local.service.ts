import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';
import { PeliculaDetalle } from '../interfaces/interfaces';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  peliculas: PeliculaDetalle[] = [];
  private _storage: Storage | null = null;

  constructor(private storage: Storage, private toastCtrl: ToastController) {

    this.init();
    this.cargarFavoritos();
  }


  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 1500,
      position: 'bottom'
    });

    await toast.present();
  }



  async init() {

    const storage = await this.storage.create();
    this._storage = storage;

  }

  guardarPelicula(pelicula: PeliculaDetalle) {

    let existe = false;
    let mensaje = '';

    for (const peli of this.peliculas) {
      if (peli.id === pelicula.id) {
        existe = true;
        break;
      }
    }


    if (existe) {
      this.peliculas = this.peliculas.filter(peli => peli.id !== peli.id);
      mensaje = 'Removido de Favoritos';
    } else {
      this.peliculas.push(pelicula);
      mensaje = 'Agregado a Fovoritos';
    }

    this.presentToast(mensaje);
    this._storage?.set('peliculas', this.peliculas);

    return !existe;

  }


  async cargarFavoritos() {



    const peliculas = await this.storage.get('peliculas');
   
    this.peliculas=peliculas  || [];
    return this.peliculas;

  }


 async  existePelicula(id:any){

    await this.cargarFavoritos();
    const existe=this.peliculas.find(peli => peli.id === id);
    return (existe) ? true : false;


  }

}
