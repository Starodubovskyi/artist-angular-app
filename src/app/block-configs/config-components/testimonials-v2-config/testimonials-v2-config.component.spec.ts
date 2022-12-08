import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsV2ConfigComponent } from './testimonials-v2-config.component';

describe('TestimonialsV2ConfigComponent', () => {
  let component: TestimonialsV2ConfigComponent;
  let fixture: ComponentFixture<TestimonialsV2ConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonialsV2ConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimonialsV2ConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
