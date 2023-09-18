# AngularExample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.2.
It uses standalone components instead of modules.

## Project structure

Inside the app directory you can find the following sub-directories:

- feature directories, such as random-commerces. Features are self-contained and contain:
  - containers (smart/higher order components)
  - components (presentational components)
  - state (actions, reducers, effects, selectors)
  - models
- services
- shared (everything that is shared amomng features, etc.)

## Development server

### Running locally

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Running in container

Alternatively you can run the dev server in a container. The prerequisites are:
- Docker compose installed (easiest way with Docker Desktop)

The container can be started by:

docker-compose up -d angular-example

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
