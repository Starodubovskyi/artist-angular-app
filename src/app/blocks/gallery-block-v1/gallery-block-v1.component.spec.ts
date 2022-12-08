import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryBlockV1Component } from './gallery-block-v1.component';

describe('GalleryBlockV1Component', () => {
  let component: GalleryBlockV1Component;
  let fixture: ComponentFixture<GalleryBlockV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryBlockV1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryBlockV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
