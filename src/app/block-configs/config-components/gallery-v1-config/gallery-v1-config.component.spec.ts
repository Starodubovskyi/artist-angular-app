import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryV1ConfigComponent } from './gallery-v1-config.component';

describe('GalleryV1ConfigComponent', () => {
  let component: GalleryV1ConfigComponent;
  let fixture: ComponentFixture<GalleryV1ConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryV1ConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryV1ConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
