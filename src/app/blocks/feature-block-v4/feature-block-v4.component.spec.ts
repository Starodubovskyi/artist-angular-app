import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureBlockV4Component } from './feature-block-v4.component';

describe('FeatureBlockV4Component', () => {
  let component: FeatureBlockV4Component;
  let fixture: ComponentFixture<FeatureBlockV4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureBlockV4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureBlockV4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
