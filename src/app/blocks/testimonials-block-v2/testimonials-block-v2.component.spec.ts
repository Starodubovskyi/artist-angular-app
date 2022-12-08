import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsBlockV2Component } from './testimonials-block-v2.component';

describe('TestimonialsBlockV2Component', () => {
  let component: TestimonialsBlockV2Component;
  let fixture: ComponentFixture<TestimonialsBlockV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonialsBlockV2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimonialsBlockV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
