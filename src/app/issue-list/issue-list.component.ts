import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.less']
})
export class IssueListComponent implements OnInit {
  @Input()
  public data:any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
  }

}
