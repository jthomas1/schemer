import { Component, Input, Output, EventEmitter} from '@angular/core';
import { ColourService } from '../colour/colour.service';

@Component({
  selector: 'colour-sliders',
  templateUrl: './colour-sliders.component.html',
  styleUrls: ['./colour-sliders.component.css']
})
export class ColourSlidersComponent {

  currentHex: String = '';
  currentRgb: Number[];

  @Output() rgbUpdated = new EventEmitter();

  @Input()
  set setColour(colour : String) {
    // trims the # off the start
    this.currentHex = colour.substring(1);
    this.currentRgb = this.colourService.hex2rgb(this.currentHex);
  }

  constructor(private colourService: ColourService) { }

  updateR(event): void {
    this.currentRgb[0] = parseInt(event.target.value);
    this.updateRgb();
  }

  updateG(event): void {
    this.currentRgb[1] = parseInt(event.target.value);
    this.updateRgb();
  }

  updateB(event): void {
    this.currentRgb[2] = parseInt(event.target.value);
    this.updateRgb();
  }

  updateRgb(): void {
    this.rgbUpdated.emit({
      newRgb: this.currentRgb
    });
  }

}
