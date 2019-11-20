import { TestBed } from '@angular/core/testing';

import { CleanerHttpClientService } from './cleaner-http-client.service';

describe('CleanerHttpClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CleanerHttpClientService = TestBed.get(CleanerHttpClientService);
    expect(service).toBeTruthy();
  });
});
