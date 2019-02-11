import { TestBed } from '@angular/core/testing';

import { ActiveElementService } from './active-element.service';

describe('ActiveElementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActiveElementService = TestBed.get(ActiveElementService);
    expect(service).toBeTruthy();
  });
});
