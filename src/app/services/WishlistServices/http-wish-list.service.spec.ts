import { TestBed } from '@angular/core/testing';

import { HttpWishListService } from './http-wish-list.service';

describe('HttpWishListService', () => {
  let service: HttpWishListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpWishListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
