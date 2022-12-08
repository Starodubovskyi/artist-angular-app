import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsBlockV1Component } from './testimonials-block-v1.component';

describe('TestimonialsBlockV1Component', () => {
  let component: TestimonialsBlockV1Component;
  let fixture: ComponentFixture<TestimonialsBlockV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonialsBlockV1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimonialsBlockV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
