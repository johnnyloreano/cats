import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { RandomImagesComponent } from './random-images/random-images.component';
import { HttpGeneratorComponent } from './http-generator/http-generator.component';
import { FormsModule } from '@angular/forms';
import { CatsFullScreenComponent } from './cats-full-screen/cats-full-screen.component';
import { BackButtonComponent } from './back-button/back-button.component';
@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    RandomImagesComponent,
    HttpGeneratorComponent,
    CatsFullScreenComponent,
    BackButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
