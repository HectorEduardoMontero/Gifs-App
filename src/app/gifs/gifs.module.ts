
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { CardListComponent } from './components/Card-list/card-list/card-list.component';
import { GifsCardComponent } from './components/gifs-card/gifs-card.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { LazyImageComponent } from '../shared/components/lazy-image/lazy-image.component';
import { SearchBoxComponent } from './components/search-box/search-box.componen';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent,
    GifsCardComponent,
    LazyImageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePageComponent,
    LazyImageComponent
  ]
})
export class GifsModule { }
