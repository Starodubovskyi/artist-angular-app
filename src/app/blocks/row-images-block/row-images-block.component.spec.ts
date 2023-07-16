import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowImagesBlockComponent } from './row-images-block.component';

describe('RowImagesBlockComponent', () => {
  let component: RowImagesBlockComponent;
  let fixture: ComponentFixture<RowImagesBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowImagesBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RowImagesBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
