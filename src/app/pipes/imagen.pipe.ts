import { Pipe, PipeTransform } from '@angular/core';

 const URL=`https://image.tmdb.org/t/p`;
@Pipe({
  name: 'imagen'
})


export class ImagenPipe implements PipeTransform {
  
    transform(img: string, size: string='w500'):string {
     
      const imgUrl=`${URL}/${size}/${img}`;
      console.log('URL',imgUrl)
      
    
      //h8gHn0OzBoaefsYseUByqsmEDMY.jpg
      return imgUrl;
    
    } 
  }

