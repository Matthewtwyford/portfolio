import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { MatButtonModule, MatCheckboxModule, MatCardModule, MatGridListModule, MatToolbarModule, MatIconModule } from '@angular/material';

import { AppComponent } from './app.component';
import { CardComponent } from './card.component';
import { TitleComponent } from './title.component';




@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    //MatButtonModule, MatCheckboxModule, MatCardModule, MatGridListModule, MatToolbarModule, MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
