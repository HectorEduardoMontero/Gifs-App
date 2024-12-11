import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
 template:`
  <h5>Buscar:</h5>
  <input type="text"
    class="form-control"
    (keyup.enter)="searchTag( )"
    placeholder="Buscar gifs..."
    #txtTagInput
  >
`

})

export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  Taginput!: ElementRef<HTMLInputElement>


  constructor(private gifsService:GifsService) { }


  searchTag() {

    const newTag = this.Taginput.nativeElement.value;

      this.gifsService.searchTag(newTag);

      this.Taginput.nativeElement.value='';

  }


}

