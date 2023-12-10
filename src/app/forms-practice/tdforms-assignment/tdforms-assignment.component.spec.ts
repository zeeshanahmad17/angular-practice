import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdformsAssignmentComponent } from './tdforms-assignment.component';

describe('TdformsAssignmentComponent', () => {
  let component: TdformsAssignmentComponent;
  let fixture: ComponentFixture<TdformsAssignmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TdformsAssignmentComponent]
    });
    fixture = TestBed.createComponent(TdformsAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
