import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentV4ConfigComponent } from './content-v4-config.component';

describe('ContentV4ConfigComponent', () => {
  let component: ContentV4ConfigComponent;
  let fixture: ComponentFixture<ContentV4ConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentV4ConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentV4ConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
