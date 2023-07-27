import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentThreeComponent } from './assignment-three.component';

describe('AssignmentThreeComponent', () => {
  let component: AssignmentThreeComponent;
  let fixture: ComponentFixture<AssignmentThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignmentThreeComponent]
    });
    fixture = TestBed.createComponent(AssignmentThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
