import { TestBed } from '@angular/core/testing';

import { OptionService } from './option.service';

describe('CalendarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OptionService = TestBed.get(OptionService);
    expect(service).toBeTruthy();
  });
});
