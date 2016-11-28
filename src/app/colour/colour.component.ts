// import { Component, OnInit } from '@angular/core';
import { ColourService } from './colour.service';

/*@Component({
  selector: 'app-colour',
  templateUrl: './colour.component.html',
  styleUrls: ['./colour.component.css'],
  providers: [ColourService]
})*/

export class ColourComponent {

  hexString: String;
  textColour: String;
  locked: Boolean;
  unlockBtnTitle: String;

  constructor(private colourService: ColourService) {
    this.hexString = this.colourService.getRandomHex();
    this.setTextColour();
    this.locked = false;
    this.unlockBtnTitle = "Lock";
    this.toggleLockTitle();
  }

  hexNoHash(): String {
    return this.hexString.substring(1);
  }

  changeColour(event): void {
    if (!this.locked) {
      this.hexString = this.colourService.getRandomHex();
      this.setTextColour();
    }
  }

  setColourFromRgb(event): void {
    let rgb = event.newRgb;
    this.hexString = this.colourService.rgb2hex(rgb[0], rgb[1], rgb[2]);
  }

  setTextColour(): void {
    let brightness = this.colourService.getBrightness(this.hexString);

    if (brightness > 125) {
      this.textColour = 'black';
    } else {
      this.textColour = 'white';
    }
  }

  toggleLock() : void {
    this.locked = !this.locked;
    this.toggleLockTitle();
  }

  toggleLockTitle() : void {
    if (this.locked) {
      this.unlockBtnTitle = "Unlock";
    } else {
      this.unlockBtnTitle = "Lock";
    }
  }
}
