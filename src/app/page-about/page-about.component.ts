import { Component, OnInit } from '@angular/core';
import { InstagramService } from '../services/instagram.service';


@Component({
  selector: 'app-page-about',
  templateUrl: './page-about.component.html',
  styleUrls: ['./page-about.component.scss']
})
export class PageAboutComponent implements OnInit {

  constructor(private InstagramService: InstagramService ) {
  }

  photos: any;

  ngOnInit() {
    this.photos = this.InstagramService.getObject()
      .subscribe(
      data => {
        this.photos = data;
        console.log(data)
       },
        error => console.error(error),
        ()=> console.log("done")
      );
  }
}
