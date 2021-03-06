import { Component, OnInit } from '@angular/core';
import { questions, frontCardUrls, backCardUrls } from './card-quiz.mock';

@Component({
  selector: 'app-card-quizz',
  templateUrl: './card-quizz.component.html',
  styleUrls: ['./card-quizz.component.scss'],
})
export class CardQuizzComponent implements OnInit {
  isFront = true;
  cardId = 0;
  questionsList = questions;
  frontImgUrl: string;
  backImgUrl: string;
  cardColor = ['#4bb4e6', '#50be87', '#a885d8'];

  gameStarted = false;

  constructor() {}

  ngOnInit(): void {
    this.questionsList = this.shuffleCards(questions);
    this.updateBackgroundUrls(this.cardId);
  }

  startGame(): void {
    this.gameStarted = true;
  }

  toggleCard(): void {
    this.isFront = !this.isFront;
  }

  getFrontUrl(): string {
    return 'url(' + this.frontImgUrl + ')';
  }

  getBackUrl(): string {
    return 'url(' + this.backImgUrl + ')';
  }

  onClickNext(): void {
    if (this.isFront) {
      this.nextCard();
    } else {
      this.isFront = true;
      setTimeout(() => {
        this.nextCard();
      }, 500);
    }
  }

  nextCard(): void {
    if (this.cardId < this.questionsList.length - 1) {
      this.cardId++;
    } else {
      this.cardId = 0;
    }
    this.updateBackgroundUrls(this.cardId);
  }

  onClickPrevious(): void {
    if (this.isFront) {
      this.previousCard();
    } else {
      this.isFront = true;
      setTimeout(() => {
        this.previousCard();
      }, 500);
    }
  }

  previousCard(): void {
    if (this.cardId >= 1) {
      this.cardId--;
    } else {
      this.cardId = this.questionsList.length - 1;
    }
    this.updateBackgroundUrls(this.cardId);
  }

  updateBackgroundUrls(newId: number): void {
    const tempType = this.questionsList[newId].type;
    this.frontImgUrl = this.getCardTypeUrl(true, tempType);
    this.backImgUrl = this.getCardTypeUrl(false, tempType);
  }

  getCardTypeUrl(isFront: boolean, type: number): string {
    if (type > frontCardUrls.length) {
      type = 0;
    }
    if (isFront) {
      return frontCardUrls[type];
    } else {
      return backCardUrls[type];
    }
  }

  shuffleCards(arr: Array<any>): Array<any> {
    let i: number;
    let j: number;
    let temp: any;
    for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  }
}
