import { Gif } from './../../interfaces/gifs.interfaces';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gifs-card',
  templateUrl: './gifs-card.component.html',

})
export class GifsCardComponent implements OnInit {

  @Input()
 public gif!:Gif


 ngOnInit(): void {
  if(!this.gif) throw new Error('Gifs properties is required');
}


}
