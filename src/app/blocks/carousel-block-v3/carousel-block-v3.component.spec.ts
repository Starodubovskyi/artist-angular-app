import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselBlockV3Component } from './carousel-block-v3.component';

describe('CarouselBlockV3Component', () => {
  let component: CarouselBlockV3Component;
  let fixture: ComponentFixture<CarouselBlockV3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselBlockV3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselBlockV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
