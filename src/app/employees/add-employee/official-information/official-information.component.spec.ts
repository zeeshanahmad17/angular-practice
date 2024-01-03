import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficialInformationComponent } from './official-information.component';

describe('OfficialInformationComponent', () => {
  let component: OfficialInformationComponent;
  let fixture: ComponentFixture<OfficialInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfficialInformationComponent]
    });
    fixture = TestBed.createComponent(OfficialInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
