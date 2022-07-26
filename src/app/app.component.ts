import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'angular_issue_app';
  constructor(private httpservice:HttpService){}
  ngOnInit(): void {
    this.httpservice.getData().then( data => console.log(data))
  }
}

