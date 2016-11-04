import { Component, OnInit } from '@angular/core';
import { ColourService } from './colour.service';

@Component({
  selector: 'app-colour',
  templateUrl: './colour.component.html',
  styleUrls: ['./colour.component.css'],
  providers: [ColourService]
})
export class ColourComponent implements OnInit {

  constructor(private colourService: ColourService) { }

  hexString: String;
  textColour: String;

  ngOnInit() {
    this.hexString = this.colourService.getRandomHex();
    this.setTextColour();
  }

  changeColour(event): void {
    this.hexString = this.colourService.getRandomHex();
    this.setTextColour();
  }

  setTextColour(): void {
    let brightness = this.colourService.getBrightness(this.hexString);

    if (brightness > 125) {
      this.textColour = 'black';
    } else {
      this.textColour = 'white';
    }
  }

}
