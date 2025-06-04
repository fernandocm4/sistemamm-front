import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUpdateComponent } from './manage-update.component';

describe('ManageUpdateComponent', () => {
  let component: ManageUpdateComponent;
  let fixture: ComponentFixture<ManageUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
