import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureV5ConfigComponent } from './feature-v5-config.component';

describe('FeatureV5ConfigComponent', () => {
  let component: FeatureV5ConfigComponent;
  let fixture: ComponentFixture<FeatureV5ConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureV5ConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureV5ConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
