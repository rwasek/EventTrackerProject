import { TestBed } from '@angular/core/testing';

import { TrailrunService } from './trailrun.service';

describe('TrailrunService', () => {
  let service: TrailrunService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrailrunService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
