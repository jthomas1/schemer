import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ColourService } from '../colour/colour.service';

@Component({
  selector: 'colour-sliders',
  templateUrl: './colour-sliders.component.html',
  styleUrls: ['./colour-sliders.component.css']
})
export class ColourSlidersComponent implements OnInit {

  currentColour: String = '';

  @Output() rgbUpdated = new EventEmitter();

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

  updateRgb(): void {
    console.log('update rgb called');
    this.rgbUpdated.emit({
      newRgb: this.rgb
    });
  }

}
