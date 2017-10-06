import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoryComponent } from './app.component';

@NgModule({
  declarations: [
    StoryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [StoryComponent]
})
export class AppModule { }
