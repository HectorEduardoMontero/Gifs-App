import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html'

})
export class LazyImageComponent implements OnInit {

  @Input()
  public Url!: string;
  @Input()
  public alt: string='';

  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if(!this.Url) throw new Error('URL property is required');
  }
  onLoad(): void {
    this.hasLoaded = true;

  }

}




// setTimeout(() => {
//
//   },100);
