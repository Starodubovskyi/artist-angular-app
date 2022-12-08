import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocksContainerComponent } from './blocks-container.component';

describe('BlocksContainerComponent', () => {
  let component: BlocksContainerComponent;
  let fixture: ComponentFixture<BlocksContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlocksContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlocksContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
