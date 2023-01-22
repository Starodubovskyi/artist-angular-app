import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomBlocksCreateComponent } from './custom-blocks-create.component';

describe('CustomBlocksCreateComponent', () => {
  let component: CustomBlocksCreateComponent;
  let fixture: ComponentFixture<CustomBlocksCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomBlocksCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomBlocksCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
