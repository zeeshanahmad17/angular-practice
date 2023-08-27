import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplittingCodeComponent } from './splitting-code.component';

describe('SplittingCodeComponent', () => {
  let component: SplittingCodeComponent;
  let fixture: ComponentFixture<SplittingCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SplittingCodeComponent]
    });
    fixture = TestBed.createComponent(SplittingCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
