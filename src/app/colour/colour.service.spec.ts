/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ColourService } from './colour.service';

describe('Service: Colour', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ColourService]
    });
  });

  it('should ...', inject([ColourService], (service: ColourService) => {
    expect(service).toBeTruthy();
  }));
});
