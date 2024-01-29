import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpPracticeComponent } from './http-practice.component';

describe('HttpPracticeComponent', () => {
  let component: HttpPracticeComponent;
  let fixture: ComponentFixture<HttpPracticeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HttpPracticeComponent]
    });
    fixture = TestBed.createComponent(HttpPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
