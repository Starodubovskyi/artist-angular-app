import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsV1ConfigComponent } from './testimonials-v1-config.component';

describe('TestimonialsV1ConfigComponent', () => {
  let component: TestimonialsV1ConfigComponent;
  let fixture: ComponentFixture<TestimonialsV1ConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonialsV1ConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimonialsV1ConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
