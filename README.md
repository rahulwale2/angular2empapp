# Setup Steps
1. I have created deployable folder "dist". If you just want to see UI part then deploy files in dist folder to the server under any particular directory. 
Suppose you created "empapp" folder on your web server then move all files under dist folder to "empapp" folder and access project using your server path and empapp folder.
e.g http://localhost:4200/empapp

2. If you want to check code and modify the code then you need to checkout files under angular2empapp folder on your local machine. 
Then follow below steps
- After that install node js and node package manager. 
- Install angular-cli
- User command prompt and go inside empapp folder and run >ng server --open command. Which will compile type script code and generate javascript code and launch default browse with project url.

Note: In this project we are storing data in localStoage only. Initially, I have added one record in localStorage which you can see on the screen. Then you can perform operation like Search employee, Add, Edit and delete employee.


=========================
# EmpApp

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
