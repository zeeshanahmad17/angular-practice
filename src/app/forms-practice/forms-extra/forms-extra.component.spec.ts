import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsExtraComponent } from './forms-extra.component';

describe('FormsExtraComponent', () => {
  let component: FormsExtraComponent;
  let fixture: ComponentFixture<FormsExtraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsExtraComponent]
    });
    fixture = TestBed.createComponent(FormsExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
