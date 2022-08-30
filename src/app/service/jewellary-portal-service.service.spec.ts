import { TestBed } from '@angular/core/testing';

import { JewellaryPortalServiceService } from './jewellary-portal-service.service';

describe('JewellaryPortalServiceService', () => {
  let service: JewellaryPortalServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JewellaryPortalServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
