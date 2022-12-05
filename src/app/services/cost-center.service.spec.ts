import { TestBed } from '@angular/core/testing';

import { ShoppingDepartmentService } from './cost-center.service';

describe('CostCenterService', () => {
  let service: ShoppingDepartmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingDepartmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
