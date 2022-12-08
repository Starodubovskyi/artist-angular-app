import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentBlockV6Component } from './content-block-v6.component';

describe('ContentBlockV6Component', () => {
  let component: ContentBlockV6Component;
  let fixture: ComponentFixture<ContentBlockV6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentBlockV6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentBlockV6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
