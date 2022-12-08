import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamBlockV2Component } from './team-block-v2.component';

describe('TeamBlockV2Component', () => {
  let component: TeamBlockV2Component;
  let fixture: ComponentFixture<TeamBlockV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamBlockV2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamBlockV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
