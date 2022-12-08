import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogV1ConfigComponent } from './blog-v1-config.component';

describe('BlogV1ConfigComponent', () => {
  let component: BlogV1ConfigComponent;
  let fixture: ComponentFixture<BlogV1ConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogV1ConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogV1ConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
