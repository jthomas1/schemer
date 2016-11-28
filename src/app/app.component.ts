import { Component, OnInit } from '@angular/core';
import { ColourComponent } from './colour/colour.component';
import { ColourSlidersComponent } from './colour-sliders/colour-sliders.component';
import { ColourService } from './colour/colour.service';

@Component({
  selector: 'app-root',
  providers: [ColourService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private colourService: ColourService) { }

  colours : ColourComponent[];

  ngOnInit() {
    this.colours = new Array();
    this.addNew();
  }

  addNew(): void {
    this.colours.push(new ColourComponent(this.colourService));
  }
}
