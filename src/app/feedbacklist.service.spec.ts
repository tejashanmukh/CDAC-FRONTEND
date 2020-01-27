import { TestBed, inject } from '@angular/core/testing';

import { FeedbacklistService } from './feedbacklist.service';

describe('FeedbacklistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeedbacklistService]
    });
  });

  it('should be created', inject([FeedbacklistService], (service: FeedbacklistService) => {
    expect(service).toBeTruthy();
  }));
});
