import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-http-generator',
  templateUrl: './http-generator.component.html',
  styleUrls: ['./http-generator.component.css']
})
export class HttpGeneratorComponent implements OnInit {
  private httpCode;
  private httpImage = "../../assets/FUNNYCAT2.jpg";
  constructor(private http: HttpService) { }

  ngOnInit() {
  }
  generateFunnyImage() {
    this.httpImage = "https://http.cat/" + this.httpCode;
  }
}