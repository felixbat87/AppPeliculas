import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  textoBuscar='';
  ideas:string[]=['batiman','supermen','ratamen','abusamen']

  constructor(private movieService:MoviesService) {}

  buscar(event:any){

    const valor= event.detail.value;

    this.movieService.buscarPeliculas(valor).subscribe
    (data=>console.log(data))

  }

}
