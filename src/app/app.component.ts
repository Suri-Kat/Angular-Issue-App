import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Router } from '@angular/router';

/*
▄▀█ █▀█ █▀█   █▀▀ █▀█ █▀▄▀█ █▀█ █▀█ █▄░█ █▀▀ █▄░█ ▀█▀
█▀█ █▀▀ █▀▀   █▄▄ █▄█ █░▀░█ █▀▀ █▄█ █░▀█ ██▄ █░▀█ ░█░
-----------------------------------------------------
App component has the general properties and methods that apply to the whole app.
-----------------------------------------------------

*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit
{
/****************************************************
 *                   PROPERTIES                     *
 ****************************************************/
  public title = 'angular_issue_app';

 /****************************************************
  *                    METHODS                       *
  ****************************************************/
  constructor(){}
  ngOnInit(): void {}


}

