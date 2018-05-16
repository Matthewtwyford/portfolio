import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  clients = [
    { id: 0, alt: 'Remax logo', img: '/clients/remax_logo.png'},
    { id: 1, alt: 'Coldwell Banker logo', img: '/clients/coldwell_banker_logo.png'},
    { id: 2, alt: 'Sextants logo', img: '/clients/sextants_logo.png'},
    { id: 3, alt: 'Century 21 logo', img: '/clients/c21_logo.png'},
    { id: 4, alt: 'Visit York logo', img: '/clients/visit_york_logo.png'},
    { id: 5, alt: 'Visit Norfolk logo', img: '/clients/visit_norfolk_logo.png'},
    { id: 6, alt: 'Space agent logo', img: '/clients/spaceagent_logo.png'},
    { id: 7, alt: 'Clever Property logo', img: '/clients/clever_property_logo.png'},
    { id: 8, alt: 'Walmart logo', img: '/clients/walmart_logo.png'},
    { id: 9, alt: 'Angels logo', img: '/clients/angels_logo.png'},
    { id: 10, alt: 'Wigmore Jones logo', img: '/clients/wigmore_jones_logo.png'},
    
  ];
  
}
