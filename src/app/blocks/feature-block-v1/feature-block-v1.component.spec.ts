import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureBlockV1Component } from './feature-block-v1.component';

describe('FeatureBlockV1Component', () => {
  let component: FeatureBlockV1Component;
  let fixture: ComponentFixture<FeatureBlockV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureBlockV1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureBlockV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
