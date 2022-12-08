import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepBlockV2Component } from './step-block-v2.component';

describe('StepBlockV2Component', () => {
  let component: StepBlockV2Component;
  let fixture: ComponentFixture<StepBlockV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepBlockV2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepBlockV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
