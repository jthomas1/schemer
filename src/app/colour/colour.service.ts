import { Injectable } from '@angular/core';

@Injectable()
export class ColourService {

  constructor() { }

  private getRandom(min, max): Number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  private hex2rgb(hex): Number[] {
    var rgbHex = [
        hex.slice(0, 2),
        hex.slice(2, 4),
        hex.slice(4, 6)
    ];
    var rgbDec = [];

    rgbHex.forEach(function(item, index) {
        var dec1 = parseInt(item.charAt(0), 16) * 16;
        var dec2 = parseInt(item.charAt(1), 16);
        rgbDec[index] = dec1 + dec2;
    });

    return rgbDec;
  }

  private dec2Hex(dec): String {
    var hex = dec.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  private rgb2hex(r, g, b): String {
    return '#' + this.dec2Hex(r) + this.dec2Hex(g) + this.dec2Hex(b);
  }

  /*
  * brightness  = sqrt( .299*R2 + .587*G2 + .114*B2 );
  * from here: alienryderflex.com/hsp.html
  */
  getBrightness(colour): Number {
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

  getRandomHex(): String {
    return this.rgb2hex(this.getRandom(0, 255), this.getRandom(0, 255), this.getRandom(0, 255));
  }
}
