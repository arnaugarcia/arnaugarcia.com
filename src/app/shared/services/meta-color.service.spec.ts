import { TestBed } from '@angular/core/testing';

import { MetaColorService } from './meta-color.service';

describe('MetaColorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MetaColorService = TestBed.get(MetaColorService);
    expect(service).toBeTruthy();
  });
});
