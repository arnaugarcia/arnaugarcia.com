import { TestBed } from '@angular/core/testing';

import { ScrollSpyLibService } from './scroll-spy-lib.service';

describe('ScrollSpyLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScrollSpyLibService = TestBed.get(ScrollSpyLibService);
    expect(service).toBeTruthy();
  });
});
