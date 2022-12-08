import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamBlockV1Component } from './team-block-v1.component';

describe('TeamBlockV1Component', () => {
  let component: TeamBlockV1Component;
  let fixture: ComponentFixture<TeamBlockV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamBlockV1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamBlockV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
