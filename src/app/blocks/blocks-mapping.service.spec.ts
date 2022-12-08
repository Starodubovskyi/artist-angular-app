import { TestBed } from '@angular/core/testing';

import { BlocksMappingService } from './blocks-mapping.service';

describe('BlocksMappingService', () => {
  let service: BlocksMappingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlocksMappingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
