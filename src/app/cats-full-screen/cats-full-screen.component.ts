import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-cats-full-screen',
  templateUrl: './cats-full-screen.component.html',
  styleUrls: ['./cats-full-screen.component.css']
})
export class CatsFullScreenComponent implements OnInit {
   groupCat = [];
  constructor(private http: HttpService) { }

  ngOnInit() {
    this.generateCat();
  }

  generateCat() {
    for (let i = 0; i < 50; i++)
      this.http.getCat().subscribe(
        res => {
          this.groupCat.push(res['file'])
        }
      );
  }
}
