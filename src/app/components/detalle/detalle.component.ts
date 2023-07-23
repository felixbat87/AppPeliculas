import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { of } from 'rxjs';
import { Cast, PeliculaDetalle } from 'src/app/interfaces/interfaces';
import { DataLocalService } from 'src/app/services/data-local.service';
import { MoviesService } from 'src/app/services/movies.service';
import { environment } from 'src/environments/environment';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent  implements OnInit {
  URL: string = environment.imgPath;
 @Input() id: any;
 oculto=150;
 pelicula:PeliculaDetalle={}
 actores:Cast []=[];

  constructor(private moviesService:MoviesService, private modalCtrl:ModalController, private dataLocal:DataLocalService) { }

  ngOnInit() {
  

    this.moviesService.getPeliculaDetalle(this.id).subscribe(
      resp=>{
       this.pelicula=resp;
      }
    )



    this.moviesService.getActoresPelicula(this.id).subscribe(
      resp=>{
           this.actores=resp.cast  
      }
    )

  }

  regresar(){
 
    this.modalCtrl.dismiss();


  }

  Favorito(){

    this.dataLocal.guardarPelicula(this.pelicula);

  }

}
