/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ColourService } from './colour.service';

describe('Service: Colour', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ColourService]
    });
  });

  it('Is created properly',
    inject([ColourService], (service: ColourService) => {
      expect(service).toBeTruthy();
    }));

  describe('Conversions:', () => {

    it ('converts decimal to hexadecimal correctly',
      inject([ColourService], (service: ColourService) => {
        expect(service.dec2Hex(1)).toBe("01");
        expect(service.dec2Hex(2)).toBe("02");
        expect(service.dec2Hex(10)).toBe("0a");
        expect(service.dec2Hex(15)).toBe("0f");
        expect(service.dec2Hex(16)).toBe("10");
        expect(service.dec2Hex(17)).toBe("11");
        expect(service.dec2Hex(30)).toBe("1e");
        expect(service.dec2Hex(31)).toBe("1f");
        expect(service.dec2Hex(32)).toBe("20");
    }));

    describe('rgb2Hex', () => {
      it('throws an error if Red parameter is greater than 255',
        inject([ColourService], (service: ColourService) => {
          expect( () => service.rgb2hex(300, 0, 10)).toThrow();
      }));

      it('throws an error if Red parameter is less than 0',
        inject([ColourService], (service: ColourService) => {
          expect( () => service.rgb2hex(-1, 0, 10)).toThrow();
      }));

      it('throws an error if Green parameter is greater than 255',
        inject([ColourService], (service: ColourService) => {
          expect( () => service.rgb2hex(100, 430, 10)).toThrow();
      }));

      it('throws an error if Green parameter is less than 0',
        inject([ColourService], (service: ColourService) => {
          expect( () => service.rgb2hex(1, -10, 10)).toThrow();
      }));

      it('throws an error if Blue parameter is greater than 255',
        inject([ColourService], (service: ColourService) => {
          expect( () => service.rgb2hex(100, 130, 1230)).toThrow();
      }));

      it('throws an error if Blue parameter is less than 0',
        inject([ColourService], (service: ColourService) => {
          expect( () => service.rgb2hex(1, 0, -110)).toThrow();
      }));

      it('converts RGB to Hex correctly',
        inject([ColourService], (service: ColourService) => {
          expect(service.rgb2hex(0, 0, 0)).toBe("#000000");
          expect(service.rgb2hex(255, 255, 255)).toBe("#ffffff");
          expect(service.rgb2hex(123, 60, 95)).toBe("#7b3c5f");
      }));
    });


  });
});
