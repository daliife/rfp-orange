import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { CollaboratorsComponent } from './collaborators/collaborators.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { CardQuizzComponent } from './card-quizz/card-quizz.component';
import { HoverCardsComponent } from './hover-cards/hover-cards.component';
import { QuestionsComponent } from './questions/questions.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CollaboratorsComponent,
    ProductOverviewComponent,
    CardQuizzComponent,
    HoverCardsComponent,
    QuestionsComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
