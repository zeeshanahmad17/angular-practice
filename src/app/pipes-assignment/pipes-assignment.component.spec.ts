import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesAssignmentComponent } from './pipes-assignment.component';

describe('PipesAssignmentComponent', () => {
  let component: PipesAssignmentComponent;
  let fixture: ComponentFixture<PipesAssignmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipesAssignmentComponent]
    });
    fixture = TestBed.createComponent(PipesAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
