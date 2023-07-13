import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselBlockV1Component } from './carousel-block-v1.component';

describe('CarouselBlockV1Component', () => {
  let component: CarouselBlockV1Component;
  let fixture: ComponentFixture<CarouselBlockV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselBlockV1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselBlockV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
