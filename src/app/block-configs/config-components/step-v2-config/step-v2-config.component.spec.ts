import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepV2ConfigComponent } from './step-v2-config.component';

describe('StepV2ConfigComponent', () => {
  let component: StepV2ConfigComponent;
  let fixture: ComponentFixture<StepV2ConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepV2ConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepV2ConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
