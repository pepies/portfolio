import { Injectable} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';
import { FormData } from '../form-data';


@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  constructor(private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'KodimAbySomUzivilRodinu'
    })
  };

  public sendToApi(json: FormData) {
    return this.http.post("https://brecska.sk/api.php", json, this.httpOptions);
  }
}
