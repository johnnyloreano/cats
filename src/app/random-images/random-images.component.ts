import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-random-images',
  templateUrl: './random-images.component.html',
  styleUrls: ['./random-images.component.css']
})
export class RandomImagesComponent implements OnInit {

   randomimage = "../../assets/FUNNYCAT.jpg";

  constructor(private serviceImage: HttpService) { }
   imagesUrl = [];
  ngOnInit() {
  }

  generateImg() {
    this.serviceImage.getImage().subscribe(
      res => {
        this.randomimage = res['file']
      }
    );
  }
  saveImage() {
    this.imagesUrl.push(this.randomimage);
  }
  deleteImage() {
    this.imagesUrl.splice(-1, 1);
  }
}