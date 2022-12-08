import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureV3ConfigComponent } from './feature-v3-config.component';

describe('FeatureV3ConfigComponent', () => {
  let component: FeatureV3ConfigComponent;
  let fixture: ComponentFixture<FeatureV3ConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureV3ConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureV3ConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
