import { Component, Input, OnInit } from '@angular/core';
import { faComment } from '@fortawesome/free-solid-svg-icons';

/*
█ █▀ █▀ █░█ █▀▀   █░░ █ █▀ ▀█▀   █▀▀ █▀█ █▀▄▀█ █▀█ █▀█ █▄░█ █▀▀ █▄░█ ▀█▀
█ ▄█ ▄█ █▄█ ██▄   █▄▄ █ ▄█ ░█░   █▄▄ █▄█ █░▀░█ █▀▀ █▄█ █░▀█ ██▄ █░▀█ ░█░
-----------------------------------------------------
Issue list component contains the list of issues (can be filtered, sorted and changed by paginator in issue component)
-----------------------------------------------------
*/

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.less']
})
export class IssueListComponent implements OnInit {
/****************************************************
 *                   PROPERTIES                     *
 ****************************************************/
  @Input()
  public data:any;
  // array of colors for state
  private state_colors:any = {open:"green", closed:"red"};
  //icon for comment count
  faComment = faComment;

 /****************************************************
  *                    METHODS                       *
  ****************************************************/
  constructor() { }

  ngOnInit(): void {
    // change color of state depending on value (open/closed)
    this.data["color"] = this.state_colors[this.data.state];
  }

}
