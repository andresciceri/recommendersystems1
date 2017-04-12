import { TestBed, inject } from '@angular/core/testing';

import { ResultsServiceDos } from './results.service';

describe('ResultsServiceDos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResultsServiceDos]
    });
  });

  it('should ...', inject([ResultsServiceDos], (service: ResultsServiceDos) => {
    expect(service).toBeTruthy();
  }));
});
