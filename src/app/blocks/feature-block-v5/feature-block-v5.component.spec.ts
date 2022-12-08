import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureBlockV5Component } from './feature-block-v5.component';

describe('FeatureBlockV5Component', () => {
  let component: FeatureBlockV5Component;
  let fixture: ComponentFixture<FeatureBlockV5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureBlockV5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureBlockV5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
