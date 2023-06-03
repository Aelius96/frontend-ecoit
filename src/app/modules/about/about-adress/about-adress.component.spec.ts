import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAdressComponent } from './about-adress.component';

describe('AboutAdressComponent', () => {
  let component: AboutAdressComponent;
  let fixture: ComponentFixture<AboutAdressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutAdressComponent]
    });
    fixture = TestBed.createComponent(AboutAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
