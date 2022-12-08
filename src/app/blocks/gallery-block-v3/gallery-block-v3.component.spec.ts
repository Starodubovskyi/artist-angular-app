import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryBlockV3Component } from './gallery-block-v3.component';

describe('GalleryBlockV3Component', () => {
  let component: GalleryBlockV3Component;
  let fixture: ComponentFixture<GalleryBlockV3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryBlockV3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryBlockV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
