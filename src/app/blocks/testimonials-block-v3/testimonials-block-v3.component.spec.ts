import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsBlockV3Component } from './testimonials-block-v3.component';

describe('TestimonialsBlockV3Component', () => {
  let component: TestimonialsBlockV3Component;
  let fixture: ComponentFixture<TestimonialsBlockV3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonialsBlockV3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimonialsBlockV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
