import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsV3ConfigComponent } from './testimonials-v3-config.component';

describe('TestimonialsV3ConfigComponent', () => {
  let component: TestimonialsV3ConfigComponent;
  let fixture: ComponentFixture<TestimonialsV3ConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonialsV3ConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimonialsV3ConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
