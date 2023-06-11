import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { register } from 'swiper/element/bundle';
register();
@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent  implements OnInit {
  URL:string=environment.imgPath;

  @Input() peliculas: Pelicula[]=[];
  constructor() { }

  ngOnInit() {}

}
