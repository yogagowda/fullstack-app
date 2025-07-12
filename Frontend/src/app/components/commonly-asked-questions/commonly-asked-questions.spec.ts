import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonlyAskedQuestions } from './commonly-asked-questions';

describe('CommonlyAskedQuestions', () => {
  let component: CommonlyAskedQuestions;
  let fixture: ComponentFixture<CommonlyAskedQuestions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonlyAskedQuestions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonlyAskedQuestions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
