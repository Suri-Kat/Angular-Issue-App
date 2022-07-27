import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { IssueDetailsComponent } from './issue-details/issue-details.component';
import { IssuesComponent } from './issues/issues.component';

@NgModule({
  declarations: [
    AppComponent,
    IssueListComponent,
    IssueDetailsComponent,
    IssuesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
