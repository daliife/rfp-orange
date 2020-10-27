import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardQuizzComponent } from './card-quizz.component';

describe('CardQuizzComponent', () => {
  let component: CardQuizzComponent;
  let fixture: ComponentFixture<CardQuizzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardQuizzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardQuizzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
