import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFunctionsComponent } from './add-functions.component';

describe('AddFunctionsComponent', () => {
  let component: AddFunctionsComponent;
  let fixture: ComponentFixture<AddFunctionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddFunctionsComponent]
    });
    fixture = TestBed.createComponent(AddFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
