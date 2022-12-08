import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentBlockV3Component } from './content-block-v3.component';

describe('ContentBlockV3Component', () => {
  let component: ContentBlockV3Component;
  let fixture: ComponentFixture<ContentBlockV3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentBlockV3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentBlockV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
