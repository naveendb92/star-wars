# The StarWars Application :boom:

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.5.

# Demo Link

  https://naveendb92.github.io/star-wars/#/planet

## Application Information

  This application is built using Angular 7, Angular-Material, SCSS, Bootstrap 4.
  
  Color Palette used: https://colorhunt.co/palette/144191
  
##  Entire Application is built using the following commands
  * ___ng new star-wars --style=scss___
  * ___npm install --save bootstrap jquery popper.js___
  * ___ng g component components/dashboard___ `(component creation: creates dashboard component inside components folder)`
  * ___npm install --save @angular/material @angular/cdk @angular/animations___
  * ___npm install --save hammerjs___
  * ___ng generate service services/data___
  * ___ng generate service services/count___
  `(contains a variable which is a subjectBehavior and made as observable so that the changes to the variable can be observed/monitored from anywhere in the application)`
  * __npm install --save font-awesome___

## Development Server

 > Run `ng serve` and navigate to `http://localhost:4200/`. Or run `ng serve --open` which automatically open the browser and runs the application. Also the app will automcatically detect if any changes and reloads the application.
 
## Deployment of Application to GitHub Page

  1.  Run the command **`ng build --prod --output-path docs --base-href /<project_name>/`** which creates `docs` folder in your applicaion root path. 
  2.  Inside docs folder, copy `index.html` and paste in the same folder (docs) and rename it to `404.html`.
  3. Commit all the changes and push the code to GitHub.
  4. Go to GitHub -> Your Application -> Settings (top right corner) -> scroll down and find `GitHub Pages`. <kbd>↓</kbd>
  5. From the `Source` dropdown, select `master branch/docs folder`.
  6. It creates a application link.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Project Build

  _"ng build --prod"_


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

> #### Markdown Cheatsheet ####
  >> * https://github.com/tchapi/markdown-cheatsheet/blob/master/README.md
  >> * https://www.webfx.com/tools/emoji-cheat-sheet/
