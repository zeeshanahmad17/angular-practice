import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsPracticeComponent } from './forms-practice.component';

describe('FormsPracticeComponent', () => {
  let component: FormsPracticeComponent;
  let fixture: ComponentFixture<FormsPracticeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsPracticeComponent]
    });
    fixture = TestBed.createComponent(FormsPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
