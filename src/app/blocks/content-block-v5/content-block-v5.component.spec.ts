import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentBlockV5Component } from './content-block-v5.component';

describe('ContentBlockV5Component', () => {
  let component: ContentBlockV5Component;
  let fixture: ComponentFixture<ContentBlockV5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentBlockV5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentBlockV5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
