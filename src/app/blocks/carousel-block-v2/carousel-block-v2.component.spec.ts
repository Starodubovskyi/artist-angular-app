import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselBlockV2Component } from './carousel-block-v2.component';

describe('CarouselBlockV2Component', () => {
  let component: CarouselBlockV2Component;
  let fixture: ComponentFixture<CarouselBlockV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselBlockV2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselBlockV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
