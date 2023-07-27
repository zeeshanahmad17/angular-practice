import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentFourComponent } from './assignment-four.component';

describe('AssignmentFourComponent', () => {
  let component: AssignmentFourComponent;
  let fixture: ComponentFixture<AssignmentFourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignmentFourComponent]
    });
    fixture = TestBed.createComponent(AssignmentFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
