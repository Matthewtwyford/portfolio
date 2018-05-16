import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
    clients = [
    { id: 0, alt: 'Remax logo', img: '/clients/remax_logo_matthew_twyford.png'},
    { id: 1, alt: 'Remax logo', img: '/clients/remax_logo_matthew_twyford.png'},
  ];
  
}
