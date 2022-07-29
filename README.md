# Issue list for Angular GitHub project
#### About:
Practice task to get better in the Angular framework. The goal is to implement a site similar to https://github.com/angular/angular/issues.

[TOCM]

## How to setup project

##### Production build
Download and deploy all the files from the `dist` folder in the HTTP server of your choice. 

### Alternative approach
##### Download and build whole project
To install dependencies, run `npm install`.  Execute `ng build` to build the project.

##### Serve
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/` unless otherwise configured.


## Structure
The application has the following components:
- **App component** - Has the general properties and methods that apply to the whole app.
- **Issue component** - Contains the component issue-list along with a sort, filter and paginator elements to control this issue list.
- **Issue list component** - Contains the list of issues.
- **Issue detail component** - Displays the detailed information of the given issue.

## Future fixes
- The markdown in the issue detail is not parsed. It would visually look better if it was.
- The paginator does not work completely as it should. Some functional improvements need to be done.
