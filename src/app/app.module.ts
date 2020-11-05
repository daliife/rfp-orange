import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { CollaboratorsComponent } from './collaborators/collaborators.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { CardQuizzComponent } from './card-quizz/card-quizz.component';
import { HoverCardsComponent } from './hover-cards/hover-cards.component';
import { QuestionsComponent } from './questions/questions.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { ServicesComponent } from './services/services.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { HomeComponent } from './home/home.component';
import { ServicesCarouselComponent } from './services/services-carousel/services-carousel.component';

import { LottieModule } from 'ngx-lottie';
import player, { LottiePlayer } from 'lottie-web';

export function playerFactory(): LottiePlayer {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CollaboratorsComponent,
    ProductOverviewComponent,
    CardQuizzComponent,
    HoverCardsComponent,
    QuestionsComponent,
    ProfilesComponent,
    ServicesComponent,
    IntroductionComponent,
    HomeComponent,
    ServicesCarouselComponent,
  ],
  imports: [BrowserModule, LottieModule.forRoot({ player: playerFactory })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
