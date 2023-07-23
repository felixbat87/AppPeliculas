import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../components/detalle/detalle.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})


export class Tab2Page {
  buscando=false;
   URL=environment.imgPath;
  textoBuscar='';
  peliculas:Pelicula[]=[];
  ideas:string[]=['batiman','supermen','ratamen','abusamen']

  constructor(private movieService:MoviesService, private modalCtrl:ModalController) {}

  buscar(event:any){
    this.buscando=true;
    const valor:string= event.detail.value;

    if(valor.length===0){
     this.buscando=false;
     this.peliculas=[];
     return
    }

    this.movieService.buscarPeliculas(valor).subscribe
    (resp=>{
      console.log(resp)
  
      this.peliculas=resp['results'];
      this.buscando=false;
  })

  }

  async detalle(id:any){

    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        id
      }
    })
    
    modal.present();
   

  }

}
