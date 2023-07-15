import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pelicula } from 'src/app/interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { DetalleComponent } from '../detalle/detalle.component';


@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
})
export class SlideshowParesComponent  implements OnInit {
  URL:string=environment.imgPath;
  @Input() peliculas: Pelicula[]=[];
  @Output() cargarMas = new EventEmitter();
  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {}


  onClick(){
    this.cargarMas.emit();
  }


  async verDetalle(id: any) {

    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        id
      }
    })

    modal.present();

  }

}
