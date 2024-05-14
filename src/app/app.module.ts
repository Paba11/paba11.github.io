import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HeaderComponent } from './components/header/header.component';
import { ContentsComponent } from './components/contents/contents.component';
import { FooterComponent } from './components/footer/footer.component';
import { LeftsideContentsComponent } from './components/leftside-contents/leftside-contents.component';
import { RightsideContentsComponent } from './components/rightside-contents/rightside-contents.component';
import { CenterContentsComponent } from './components/center-contents/center-contents.component';
import { RadioCardComponent } from './components/radio-card/radio-card.component';
import {CountdownModule} from "ngx-countdown";
import { CountdownComponent } from './components/countdown/countdown.component';
import { SideArticlesComponent } from './components/side-articles/side-articles.component';
import { HorizontalAdvertisementComponent } from './components/horizontal-advertisement/horizontal-advertisement.component';
import { VerticalAdvertisementComponent } from './components/vertical-advertisement/vertical-advertisement.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentsComponent,
    FooterComponent,
    LeftsideContentsComponent,
    RightsideContentsComponent,
    CenterContentsComponent,
    RadioCardComponent,
    CountdownComponent,
    SideArticlesComponent,
    HorizontalAdvertisementComponent,
    VerticalAdvertisementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarComponent,
    CountdownModule,
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
