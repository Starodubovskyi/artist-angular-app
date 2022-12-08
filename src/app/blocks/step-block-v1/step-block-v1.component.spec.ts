import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepBlockV1Component } from './step-block-v1.component';

describe('StepBlockV1Component', () => {
  let component: StepBlockV1Component;
  let fixture: ComponentFixture<StepBlockV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepBlockV1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepBlockV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
