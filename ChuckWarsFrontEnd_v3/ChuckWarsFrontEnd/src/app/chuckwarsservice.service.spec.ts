import { TestBed } from '@angular/core/testing';

import { ChuckwarsserviceService } from './chuckwarsservice.service';

describe('ChuckwarsserviceService', () => {
  let service: ChuckwarsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChuckwarsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
