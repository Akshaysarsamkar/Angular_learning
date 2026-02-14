import { TestBed } from '@angular/core/testing';

import { RoutingserviceService } from './routingservice.service';

describe('RoutingserviceService', () => {
  let service: RoutingserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutingserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
