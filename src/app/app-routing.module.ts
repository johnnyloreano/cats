import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component'
import { RandomImagesComponent } from './random-images/random-images.component'
import { HttpGeneratorComponent } from './http-generator/http-generator.component';
import { CatsFullScreenComponent } from './cats-full-screen/cats-full-screen.component';
const routes: Routes = [
  {path:"httpGenerator" , component: HttpGeneratorComponent },
  {path:"imageGenerator" , component: RandomImagesComponent },
  {path:"fullCats" , component: CatsFullScreenComponent },
  {path:"**" , component: MainMenuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }