import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  template: `
    <div class="container" id="work">
      <h2 class="display-4 text-center">{{ title }}</h2>
       <span class="border d-block"></span>
    </div>
  `,
  styles: []
})
export class TitleComponent implements OnInit {

  
  title = "this the title";
  
  constructor() { }

  ngOnInit() {
  }

}
