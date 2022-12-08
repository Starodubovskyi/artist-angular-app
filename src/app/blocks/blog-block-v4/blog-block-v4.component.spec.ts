import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogBlockV4Component } from './blog-block-v4.component';

describe('BlogBlockV4Component', () => {
  let component: BlogBlockV4Component;
  let fixture: ComponentFixture<BlogBlockV4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogBlockV4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogBlockV4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
