import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentV6ConfigComponent } from './content-v6-config.component';

describe('ContentV6ConfigComponent', () => {
  let component: ContentV6ConfigComponent;
  let fixture: ComponentFixture<ContentV6ConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentV6ConfigComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ContentV6ConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
