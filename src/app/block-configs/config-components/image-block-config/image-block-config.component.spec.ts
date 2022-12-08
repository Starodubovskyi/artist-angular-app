import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageBlockConfigComponent } from './image-block-config.component';

describe('ImageBlockConfigComponent', () => {
  let component: ImageBlockConfigComponent;
  let fixture: ComponentFixture<ImageBlockConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageBlockConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageBlockConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
