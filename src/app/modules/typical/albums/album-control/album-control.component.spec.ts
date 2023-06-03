import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumControlComponent } from './album-control.component';

describe('AlbumControlComponent', () => {
  let component: AlbumControlComponent;
  let fixture: ComponentFixture<AlbumControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumControlComponent]
    });
    fixture = TestBed.createComponent(AlbumControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
