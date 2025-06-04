import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageExcludeComponent } from './manage-exclude.component';

describe('ManageExcludeComponent', () => {
  let component: ManageExcludeComponent;
  let fixture: ComponentFixture<ManageExcludeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageExcludeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageExcludeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
