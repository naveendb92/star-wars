# StarWars

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.5.

# Demo Link

  https://naveendb92.github.io/star-wars/#/planet

# Application Information

  This application is built using Angular 7, Angular-Material, SCSS, Bootstrap 4.
  
  Color Palette used: https://colorhunt.co/palette/144191
  
##  Entire Application is built using the following commands
  * ng new star-wars --style=scss
  * npm install --save bootstrap jquery popper.js
  * ng g component components/dashboard (component creation: creates dashboard component inside components folder)
  * npm install --save @angular/material @angular/cdk @angular/animations
  * npm install --save hammerjs
  * ng generate service services/data
  * ng generate service services/count
  `(contains a variable which is a subjectBehavior and made as observable so that the changes to the variable can be observed/monitored from anywhere in the application)`
  * npm install --save font-awesome

## Development server

 > Run `ng serve` and navigate to `http://localhost:4200/`. Or run `ng serve --open` which automatically open the browser and runs the application. Also the app will automcatically detect if any changes and reloads the application.
 
## Deployment of Application to GitHub Page

  1.  Run the command `ng build --prod --output-path docs --base-href /<project_name>/` which creates `docs` folder in your applicaion root path. 
  2.  Inside docs folder, copy `index.html` and paste in the same folder (docs) and rename it to `404.html`.
  3. Commit all the changes and push the code to GitHub.
  4. Go to GitHub -> Your Application -> Settings (top right corner) -> scroll down and find `GitHub Pages`. <kbd>↓</kbd>
  5. From the `Source` dropdown, select `master branch/docs folder`.
  6. It creates a application link.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Project Build

"ng build --prod"


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
