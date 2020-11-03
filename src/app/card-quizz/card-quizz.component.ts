import { Component, OnInit } from '@angular/core';
import { questions, frontCardUrls, backCardUrls } from './card-quiz.mock';

@Component({
  selector: 'app-card-quizz',
  templateUrl: './card-quizz.component.html',
  styleUrls: ['./card-quizz.component.scss']
})
export class CardQuizzComponent implements OnInit {

  isFront = true;
  cardId = 0;
  questionsList = questions;
  frontImgUrl: string;
  backImgUrl: string;
  cardColor = ['#4bb4e6', '#50be87', '#a885d8'];

  constructor() { }

  ngOnInit(): void {
    this.updateBackgroundUrls(this.cardId);
  }

  toggleCard(): void{
    this.isFront = !this.isFront;
    console.log('click', this.isFront);
  }

  getFrontUrl(): string{
    return 'url(' + this.frontImgUrl + ')';
  }

  getBackUrl(): string{
    return 'url(' + this.backImgUrl + ')';
  }

  nextCard(): void{
    this.isFront = true;
    if (this.cardId < this.questionsList.length - 1) {
      this.cardId++;
    }else{
      this.cardId = 0;
    }
    this.updateBackgroundUrls(this.cardId);
  }

  previousCard(): void{
    this.isFront = true;
    if (this.cardId >= 1) {
      this.cardId--;
    }else{
      this.cardId = this.questionsList.length - 1;
    }
    this.updateBackgroundUrls(this.cardId);
  }

  updateBackgroundUrls(newId: number): void{
    const tempType = this.questionsList[newId].type;
    this.frontImgUrl = this.getCardTypeUrl(true, tempType);
    this.backImgUrl = this.getCardTypeUrl(false, tempType);
  }

  getCardTypeUrl(isFront: boolean, type: number): string{
    if (type > frontCardUrls.length) { type = 0; }
    if (isFront){
      return frontCardUrls[type];
    }else{
      return backCardUrls[type];
    }
  }

}
