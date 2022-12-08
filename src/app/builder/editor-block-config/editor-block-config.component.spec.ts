import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorBlockConfigComponent } from './editor-block-config.component';

describe('EditorBlockConfigComponent', () => {
  let component: EditorBlockConfigComponent;
  let fixture: ComponentFixture<EditorBlockConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorBlockConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorBlockConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
