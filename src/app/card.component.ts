import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    
      <div class="card box">
          <img class="img-fluid"  style='filter: grayscale(100%);' src="/assets/images/clients/remax_logo_matthew_twyford.png" alt="2-start-simple"/>
      </div>
  `,
  styles: []
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
