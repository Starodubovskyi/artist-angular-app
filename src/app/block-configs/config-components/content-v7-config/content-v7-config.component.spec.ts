import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentV7ConfigComponent } from './content-v7-config.component';

describe('ContentV7ConfigComponent', () => {
  let component: ContentV7ConfigComponent;
  let fixture: ComponentFixture<ContentV7ConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentV7ConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentV7ConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
