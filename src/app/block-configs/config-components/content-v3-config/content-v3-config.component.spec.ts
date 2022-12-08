import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentV3ConfigComponent } from './content-v3-config.component';

describe('ContentV3ConfigComponent', () => {
  let component: ContentV3ConfigComponent;
  let fixture: ComponentFixture<ContentV3ConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentV3ConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentV3ConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
