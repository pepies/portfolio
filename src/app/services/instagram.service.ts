import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InstagramService {

  constructor() { }

  json: string = "https://api.instagram.com/v1/users/self/media/recent/?access_token=1131269624.8cb3ab2.145d3b5bb12b4ef38aa932c202ac8dc0";

  getJSON() {
    return this.json;
  }
}
