import { TestBed } from '@angular/core/testing';

import { CustomBlockServiceService } from './custom-block.service';

describe('CustomBlockServiceService', () => {
  let service: CustomBlockServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomBlockServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
