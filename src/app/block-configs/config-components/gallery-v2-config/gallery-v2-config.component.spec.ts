import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryV2ConfigComponent } from './gallery-v2-config.component';

describe('GalleryV2ConfigComponent', () => {
  let component: GalleryV2ConfigComponent;
  let fixture: ComponentFixture<GalleryV2ConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryV2ConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryV2ConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
