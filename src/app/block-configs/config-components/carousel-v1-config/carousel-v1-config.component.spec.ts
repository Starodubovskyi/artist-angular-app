import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselV1ConfigComponent } from './carousel-v1-config.component';

describe('CarouselV1ConfigComponent', () => {
  let component: CarouselV1ConfigComponent;
  let fixture: ComponentFixture<CarouselV1ConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselV1ConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselV1ConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
