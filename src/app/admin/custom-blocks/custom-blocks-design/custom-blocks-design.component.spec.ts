import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomBlocksDesignComponent } from './custom-blocks-design.component';

describe('CustomBlocksDesignComponent', () => {
  let component: CustomBlocksDesignComponent;
  let fixture: ComponentFixture<CustomBlocksDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomBlocksDesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomBlocksDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
