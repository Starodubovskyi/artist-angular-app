import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselBlockV5Component } from './carousel-block-v5.component';

describe('CarouselBlockV5Component', () => {
  let component: CarouselBlockV5Component;
  let fixture: ComponentFixture<CarouselBlockV5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselBlockV5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselBlockV5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
