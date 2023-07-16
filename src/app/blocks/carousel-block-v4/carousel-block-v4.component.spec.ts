import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselBlockV4Component } from './carousel-block-v4.component';

describe('CarouselBlockV4Component', () => {
  let component: CarouselBlockV4Component;
  let fixture: ComponentFixture<CarouselBlockV4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselBlockV4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselBlockV4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
