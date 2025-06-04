import { TestBed } from '@angular/core/testing';

import { ManageUpdateService } from './manage-update.service';

describe('ManageUpdateService', () => {
  let service: ManageUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
