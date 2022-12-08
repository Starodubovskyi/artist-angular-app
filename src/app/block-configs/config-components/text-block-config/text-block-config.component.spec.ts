import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBlockConfigComponent } from './text-block-config.component';

describe('TextBlockConfigComponent', () => {
  let component: TextBlockConfigComponent;
  let fixture: ComponentFixture<TextBlockConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextBlockConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextBlockConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
