import { Component, OnInit, Input } from '@angular/core';
import { ColourService } from '../colour/colour.service';

@Component({
  selector: 'colour-sliders',
  templateUrl: './colour-sliders.component.html',
  styleUrls: ['./colour-sliders.component.css']
})
export class ColourSlidersComponent implements OnInit {

  currentColour: String = '';

  @Input()
  set setColour(colour : String) {
    // trims the # off the start
    this.currentColour = colour.substring(1);
  }

  rgb: Number[];


  constructor(private colourService: ColourService) { }

  ngOnInit() {
    this.rgb = this.colourService.hex2rgb(this.currentColour);
  }

}
