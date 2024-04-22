# Recipeek

# To initialize the project

for windows users, clone this repo and run setup.bat.
this will create a virtual environment for this project and install all dependencies

## Available Scripts for frontend

To initialize the frontend, navigate to the frontend directory. Note this will not be connected with the backend if backend is not running yet.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Available Scripts for backend

### `python manage.py runserver`

This script will initialize the backend server, for the frontend.


### Testing

## Cypress E2E Testing

Our projectuses Cypress for end-to-end(e2e) testing. 
The Cypress tests are located in the 'cypress/integration' directory.

## Running Cypreass Tests Locally

1. Install the project dependencies: 
### `npm install`
2. Install Cypress locally as a dev dependency:
### `npm install cypress --save-dev` or `yarn add cypress --dev`
3. Open Cypress Launchpad from your project root: 
`npx cypress open` or `yarn cypress open`
4. Choosse a testing type from and kaubch from your preferred browser.

### Test Cases

The Cypress e2e test suite covers following critical functionalities:

- User Authentication

### Viewing Test Results

Cypress provides a built-in test runner that allows you to view th test results and debug any failing tests. 


## CircleCI Configuration

We use CircleCi for continous integration. 
Our CircleCI pipeline is configured in the '.circleci/config.yml' file.

## CircleCi Pipeline

The CircleCI pipeline perform the following steps:

1. Install the project dependencies

## Viewing the Test Reports

CircleCI provides built-in support for displaying test results.
After each succesful pipeline run, we can navigate to the "Tests" tab in the CircleCI UI to view the test results, including pass/fail status and any failes test cases

### Triggernig the Pipeline 

The CircleCI Pipeline is triggered on every commit and pull request to the repository.