import { TestBed } from '@angular/core/testing';

import { CustomerHttpClientService } from './customer-http-client.service';

describe('CustomerHttpClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerHttpClientService = TestBed.get(CustomerHttpClientService);
    expect(service).toBeTruthy();
  });
});
