import { Component, OnInit } from '@angular/core';
import { questions } from './card-quiz.mock';

@Component({
  selector: 'app-card-quizz',
  templateUrl: './card-quizz.component.html',
  styleUrls: ['./card-quizz.component.scss']
})
export class CardQuizzComponent implements OnInit {

  isFront = true;
  cardId = 0;
  questionsList = questions;

  constructor() { }

  ngOnInit(): void { }

  toggleCard(): void{
    this.isFront = !this.isFront;
  }

  nextCard(): void{
    this.isFront = true;
    if (this.cardId < this.questionsList.length - 1) {
      this.cardId++;
    }else{
      this.cardId = 0;
    }
  }

  previousCard(): void{
    this.isFront = true;
    if (this.cardId >= 1) {
      this.cardId--;
    }else{
      this.cardId = this.questionsList.length - 1;
    }
  }


}
