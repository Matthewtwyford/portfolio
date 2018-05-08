import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="card box">
       <img class="img-fluid"  style='filter: grayscale(100%);' src="/assets/images/clients/remax_logo_matthew_twyford.png" alt="{{ alt }}"/>
    </div>
  `,
  styles: []
})
export class CardComponent implements OnInit {

  
  alt = "this this is the alt"
  
  constructor() { }

  ngOnInit() {}

}
