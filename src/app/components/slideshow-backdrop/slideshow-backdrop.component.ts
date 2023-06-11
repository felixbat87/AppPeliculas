import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { register } from 'swiper/element/bundle';
register();
@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent  implements OnInit {
  URL:string=environment.imgPath;

@Input() peliculas: Pelicula[]=[];

  constructor() { }

  ngOnInit() {}

}
