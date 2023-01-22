import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomBlocksListComponent } from './custom-blocks-list.component';

describe('CustomBlocksListComponent', () => {
  let component: CustomBlocksListComponent;
  let fixture: ComponentFixture<CustomBlocksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomBlocksListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomBlocksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
