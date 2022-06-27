import { TestBed } from '@angular/core/testing';

import { Map1Service } from './map1.service';

describe('Map1Service', () => {
  let service: Map1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Map1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
