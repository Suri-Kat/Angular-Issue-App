import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.less']
})
export class IssuesComponent implements OnInit {

  public git_data: any;
  constructor(private httpservice:HttpService) { }

  ngOnInit(): void {
    this.httpservice.getData().then( data => this.git_data = data)
  }

}
