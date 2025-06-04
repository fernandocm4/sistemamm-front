import { TestBed } from '@angular/core/testing';

import { ManageExcludeService } from './manage-exclude.service';

describe('ManageExcludeService', () => {
  let service: ManageExcludeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageExcludeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
