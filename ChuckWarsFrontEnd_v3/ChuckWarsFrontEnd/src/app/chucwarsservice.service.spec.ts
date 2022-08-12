import { TestBed } from '@angular/core/testing';

import { ChucwarsserviceService } from './chucwarsservice.service';

describe('ChucwarsserviceService', () => {
  let service: ChucwarsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChucwarsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
