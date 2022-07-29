import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { faComment } from '@fortawesome/free-solid-svg-icons';


/*

█ █▀ █▀ █░█ █▀▀   █▀▄ █▀▀ ▀█▀ ▄▀█ █ █░░ █▀   █▀▀ █▀█ █▀▄▀█ █▀█ █▀█ █▄░█ █▀▀ █▄░█ ▀█▀
█ ▄█ ▄█ █▄█ ██▄   █▄▀ ██▄ ░█░ █▀█ █ █▄▄ ▄█   █▄▄ █▄█ █░▀░█ █▀▀ █▄█ █░▀█ ██▄ █░▀█ ░█░
-----------------------------------------------------
Issue detail component displays the detailed information of the given issue.
-----------------------------------------------------

*/
@Component({
  selector: 'app-issue-details',
  templateUrl: './issue-details.component.html',
  styleUrls: ['./issue-details.component.less']
})
export class IssueDetailsComponent implements OnInit, OnDestroy {
/****************************************************
 *                   PROPERTIES                     *
 ****************************************************/
  private subscribtion: Subscription;
  public data: any;
  private state_colors:any = {open:"green", closed:"red"};
  faComment = faComment;

 /****************************************************
  *                    METHODS                       *
  ****************************************************/
  constructor(private route: ActivatedRoute, private http_service: HttpService) {
    // Passing on id of issue using queryParam to display specific issue (as well as logging in console for debugging)
    this.subscribtion = this.route.queryParamMap
        .subscribe( params => {
          const id = params.get("id");
          if (id){
            this.http_service.getDetail(id).then( res => {
              this.data = res
              console.log(this.data);
              // Color of the state text (green/red)
              this.data["color"] = this.state_colors[this.data.state];
            })
          }
        })
  }

  ngOnInit(): void
  {

  }

  // Function to clean garbage collector
  ngOnDestroy()
  {
    this.subscribtion.unsubscribe();
  }
}
