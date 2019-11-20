import { TestBed } from '@angular/core/testing';

import { RequestHttpClientService } from './request-http-client.service';

describe('RequestHttpClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestHttpClientService = TestBed.get(RequestHttpClientService);
    expect(service).toBeTruthy();
  });
});
