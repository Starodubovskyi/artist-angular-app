import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureBlockV2Component } from './feature-block-v2.component';

describe('FeatureBlockV2Component', () => {
  let component: FeatureBlockV2Component;
  let fixture: ComponentFixture<FeatureBlockV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureBlockV2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureBlockV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
