import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryHomeComponent } from './gallery-home.component';

describe('GalleryHomeComponent', () => {
  let component: GalleryHomeComponent;
  let fixture: ComponentFixture<GalleryHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryHomeComponent]
    });
    fixture = TestBed.createComponent(GalleryHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
