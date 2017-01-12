import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ColourSlidersComponent } from './colour-sliders/colour-sliders.component';
import { JtDraggableDirective } from './jt-draggable.directive';
//import { ColourComponent } from './colour/colour.component';


@NgModule({
  declarations: [
    AppComponent,
    ColourSlidersComponent,
    JtDraggableDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
