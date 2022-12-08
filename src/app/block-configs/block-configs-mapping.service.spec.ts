import { TestBed } from '@angular/core/testing';

import { BlockConfigsMappingService } from './block-configs-mapping.service';

describe('BlockConfigsMappingService', () => {
  let service: BlockConfigsMappingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlockConfigsMappingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
