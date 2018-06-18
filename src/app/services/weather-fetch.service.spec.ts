import { TestBed, inject } from '@angular/core/testing';

import { WeatherFetchService } from './weather-fetch.service';

describe('WeatherFetchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherFetchService]
    });
  });

  it('should be created', inject([WeatherFetchService], (service: WeatherFetchService) => {
    expect(service).toBeTruthy();
  }));
});
