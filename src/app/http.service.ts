import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private imagesEndPoint = "https://aws.random.cat/meow";
  private httpEndPoint = "https://http.cat/";

  private catEndPoint = "http://aws.random.cat/meow";
  constructor(private http: HttpClient) { }
  getImage() {
    return this.http.get(this.imagesEndPoint);
  }
  getHttpImage(code) {
    return this.http.get(this.httpEndPoint + code);
  }
  getCat(){
    return this.http.get(this.catEndPoint);
  }
}