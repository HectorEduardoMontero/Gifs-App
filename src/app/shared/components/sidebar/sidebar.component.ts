import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {



    constructor (private gifsservice:GifsService) { }

    searchtag(tag:string):void {
      this.gifsservice.searchTag(tag);

    }

    get tags():string[] {

      return this.gifsservice.tagsHistory;
    }
}

