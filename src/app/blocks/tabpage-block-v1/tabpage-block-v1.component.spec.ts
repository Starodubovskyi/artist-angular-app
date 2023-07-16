import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabPageBlockV1Component } from './tabpage-block-v1.component';

describe('TabPageBlockV1Component', () => {
  let component: TabPageBlockV1Component;
  let fixture: ComponentFixture<TabPageBlockV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabPageBlockV1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabPageBlockV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
