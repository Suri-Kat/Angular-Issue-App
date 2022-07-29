import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { FormControl } from '@angular/forms';
import {PageEvent} from '@angular/material/paginator'
/*
█ █▀ █▀ █░█ █▀▀ █▀   █▀▀ █▀█ █▀▄▀█ █▀█ █▀█ █▄░█ █▀▀ █▄░█ ▀█▀
█ ▄█ ▄█ █▄█ ██▄ ▄█   █▄▄ █▄█ █░▀░█ █▀▀ █▄█ █░▀█ ██▄ █░▀█ ░█░
-----------------------------------------------------
Issues component contains the component issue-list along with a sort, filter and paginator elements to control this issue list.
-----------------------------------------------------

*/

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.less']
})
export class IssuesComponent implements OnInit {
/****************************************************
 *                   PROPERTIES                     *
 ****************************************************/

  //variables for json data from git
  public git_data: any[] = [];
  private data: any[] = [];

  // variables for the sort, filter and paginator
  public states = new FormControl('');
  public states_list: string[] = ['open', 'closed'];
  private search_params:any = {page: 1};
 /****************************************************
  *                    METHODS                       *
  ****************************************************/
  constructor(private httpservice:HttpService) { }
  ngOnInit(): void
  {
    this.assignData()
  }

  // makes an async call and evaluates the response
  assignData()
  {
    this.httpservice.getData(this.search_params)
        .then( (data:any) =>
          {
            this.git_data = Array.from(data);
            this.data = this.git_data;

          })
        .catch( err => console.log(err))
  }

  // function to sort by given direction of the number of comments
  commentSort(direction:"asc"|"dec"| undefined = undefined)
  {
    if(!direction)
     {
       delete this.search_params["sort"];
     }
    else
     {
      this.search_params["sort"] = `comments-${direction}`;
     }
    this.assignData();
  }

  // function to give results which have given state
  stateFilter(state:"closed"|"open"|undefined = undefined)
  {
   if(!state)
    {
      delete this.search_params["state"];
    }
   else
    {
      this.search_params["state"] = state;
    }
    this.assignData();
  }

  // function to manage pagination
  handlePageEvent(event:PageEvent){
    console.log(event.pageIndex);
    this.search_params["page"] = event.pageIndex;
    this.search_params["per_page"] = event.pageSize;
    this.assignData();
  }
}

