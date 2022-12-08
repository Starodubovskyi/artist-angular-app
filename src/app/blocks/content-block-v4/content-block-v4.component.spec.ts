import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentBlockV4Component } from './content-block-v4.component';

describe('ContentBlockV4Component', () => {
  let component: ContentBlockV4Component;
  let fixture: ComponentFixture<ContentBlockV4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentBlockV4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentBlockV4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
