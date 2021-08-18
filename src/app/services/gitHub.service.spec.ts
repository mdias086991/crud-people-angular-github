/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GitHubService } from './gitHub.service';

describe('Service: GitHub', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitHubService]
    });
  });

  it('should ...', inject([GitHubService], (service: GitHubService) => {
    expect(service).toBeTruthy();
  }));
});
