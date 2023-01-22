import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomBlocksEditComponent } from './custom-blocks-edit.component';

describe('CustomBlocksEditComponent', () => {
  let component: CustomBlocksEditComponent;
  let fixture: ComponentFixture<CustomBlocksEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomBlocksEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomBlocksEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
