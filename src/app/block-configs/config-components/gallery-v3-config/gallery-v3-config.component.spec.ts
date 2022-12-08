import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryV3ConfigComponent } from './gallery-v3-config.component';

describe('GalleryV3ConfigComponent', () => {
  let component: GalleryV3ConfigComponent;
  let fixture: ComponentFixture<GalleryV3ConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryV3ConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryV3ConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
