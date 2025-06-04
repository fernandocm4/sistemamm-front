import { TestBed } from '@angular/core/testing';

import { MembersdataService } from './membersdata.service';


describe('MembersdataService', () => {
  let service: MembersdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MembersdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
