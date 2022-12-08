import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogV4ConfigComponent } from './blog-v4-config.component';

describe('BlogV4ConfigComponent', () => {
  let component: BlogV4ConfigComponent;
  let fixture: ComponentFixture<BlogV4ConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogV4ConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogV4ConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
