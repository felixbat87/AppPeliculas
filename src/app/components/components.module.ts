import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [SlideshowBackdropComponent,SlideshowPosterComponent],
  exports:[SlideshowBackdropComponent,SlideshowPosterComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
