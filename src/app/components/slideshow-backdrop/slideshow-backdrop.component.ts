import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pelicula } from 'src/app/interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { register } from 'swiper/element/bundle';
import { DetalleComponent } from '../detalle/detalle.component';
register();
@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {
  URL: string = environment.imgPath;

  @Input() peliculas: Pelicula[] = [];

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() { }

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
