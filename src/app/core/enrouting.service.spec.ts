import { TestBed } from '@angular/core/testing';

import { EnroutingService } from './enrouting.service';

describe('EnroutingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnroutingService = TestBed.get(EnroutingService);
    expect(service).toBeTruthy();
  });
});
