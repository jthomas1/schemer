import { Injectable } from '@angular/core';

@Injectable()
export class ColourService {

  constructor() { }

  getRandom(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  hex2rgb(hex: string): number[] {
    let rgbHex = [
        hex.slice(0, 2),
        hex.slice(2, 4),
        hex.slice(4, 6)
    ];
    let rgbDec = [];

    rgbHex.forEach(function(item, index) {
        let dec1 = parseInt(item.charAt(0), 16) * 16;
        let dec2 = parseInt(item.charAt(1), 16);
        rgbDec[index] = dec1 + dec2;
    });

    return rgbDec;
  }

  dec2Hex(dec): string {
    let hex = dec.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }

  rgb2hex(red: number, green: number, blue: number): string {
    if (red < 0 || red > 255) {
      throw new Error('Red value must be an integer between 0 and 255. Actual: ' + red);
    }

    if (green < 0 || green > 255) {
      throw new Error('Green value must be an integer between 0 and 255. Actual: ' + green);
    }

    if (blue < 0 || blue > 255) {
      throw new Error('Blue value must be an integer between 0 and 255. Actual: ' + blue);
    }

    return '#' + this.dec2Hex(red) + this.dec2Hex(green) + this.dec2Hex(blue);
  }

  /*
  * brightness  = sqrt( .299*R2 + .587*G2 + .114*B2 );
  * from here: alienryderflex.com/hsp.html
  */
  getBrightness(colour: any): number {
      if (typeof colour === 'string') {
          if (colour.length === 7 && colour.charAt(0) === '#') {
              colour = colour.substring(1);
          }

          colour = this.hex2rgb(colour);
      }
      return Math.round(
              Math.sqrt(
                (Math.pow(colour[0], 2) * 0.299) +
                (Math.pow(colour[1], 2) * 0.587) +
                (Math.pow(colour[2], 2) * 0.114)));
  }

  getRandomHex(): string {
    return this.rgb2hex(this.getRandom(0, 255), this.getRandom(0, 255), this.getRandom(0, 255));
  }
}
