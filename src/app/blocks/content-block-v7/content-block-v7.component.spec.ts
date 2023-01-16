import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentBlockV7Component } from './content-block-v7.component';

describe('ContentBlockV7Component', () => {
  let component: ContentBlockV7Component;
  let fixture: ComponentFixture<ContentBlockV7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentBlockV7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentBlockV7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
