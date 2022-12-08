import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureBlockV3Component } from './feature-block-v3.component';

describe('FeatureBlockV3Component', () => {
  let component: FeatureBlockV3Component;
  let fixture: ComponentFixture<FeatureBlockV3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureBlockV3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureBlockV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
