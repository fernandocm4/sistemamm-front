import { TestBed } from '@angular/core/testing';

import { ManageCreateService } from './manage-create.service';

describe('ManageCreateService', () => {
  let service: ManageCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
