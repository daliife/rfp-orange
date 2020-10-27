import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { CollaboratorsComponent } from './collaborators/collaborators.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CollaboratorsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
