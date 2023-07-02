import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/interfaces';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
})
export class SlideshowParesComponent  implements OnInit {
  URL:string=environment.imgPath;
  @Input() peliculas: Pelicula[]=[];
  @Output() cargarMas = new EventEmitter();
  constructor() { }

  ngOnInit() {}


  onClick(){
    this.cargarMas.emit();
  }

}
