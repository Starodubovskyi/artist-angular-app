import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselBlockComponentComponent } from './carousel-block-component.component';

describe('CarouselBlockComponentComponent', () => {
  let component: CarouselBlockComponentComponent;
  let fixture: ComponentFixture<CarouselBlockComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselBlockComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselBlockComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
