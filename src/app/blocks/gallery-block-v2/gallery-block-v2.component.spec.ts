import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryBlockV2Component } from './gallery-block-v2.component';

describe('GalleryBlockV2Component', () => {
  let component: GalleryBlockV2Component;
  let fixture: ComponentFixture<GalleryBlockV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryBlockV2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryBlockV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
