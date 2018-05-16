import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  template: `
    <div class="container pt-3 pb-5" id="{{ Title }}">
      <h2 class="display-4 text-center">{{ Title }}</h2>
       <span class="border d-block"></span>
    </div>
  `,
  styles: []
})
export class TitleComponent implements OnInit {

   @Input() Title: string;
   
  constructor() { }

  ngOnInit() {
  }

}
