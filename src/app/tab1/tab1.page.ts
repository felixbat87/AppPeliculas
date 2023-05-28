import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import {Pelicula} from '../interfaces/interfaces'
import { register } from 'swiper/element/bundle';
register();
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],

})
export class Tab1Page implements OnInit{

  URL:String= "https://image.tmdb.org/t/p/w500";
  peliculasRecientes:Pelicula[]=[];
  constructor(private moviesService:MoviesService) {}


  ngOnInit(){


    this.moviesService.getFeature().subscribe
    (resp=>{
      console.log('Resp',resp);
      this.peliculasRecientes=resp.results;
    });
      
  }

}
