import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="card box">
      <img class="img-fluid" src="/assets/images/{{ Img }}" alt="{{ Alt }}">
    </div>
  `,
  styles: []
})
export class CardComponent implements OnInit {

   @Input() Alt: string;
   @Input() Img: string;
   
  constructor() { }

  ngOnInit() {
  }

}
