import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepV1ConfigComponent } from './step-v1-config.component';

describe('StepV1ConfigComponent', () => {
  let component: StepV1ConfigComponent;
  let fixture: ComponentFixture<StepV1ConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepV1ConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepV1ConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
