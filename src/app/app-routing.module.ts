import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IssueDetailsComponent } from './issue-details/issue-details.component';
import { IssuesComponent } from './issues/issues.component';

const routes: Routes = [
  {path:"", redirectTo:"/issues", pathMatch:"full"},
  {path:"issues", component:IssuesComponent},
  {path:"issue-details", component:IssueDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
