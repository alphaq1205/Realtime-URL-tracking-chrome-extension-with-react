# Realtime URL tracking chrome extension

This extension is for chrome browser. It will track user's tabs url which a user is using at a particular time. If user changes tabs regularly this extension track the tabs URLs and send to backend RESTful API which is build on nodeJS.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development.

## Installing

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Build file

This is the file created after runnint the commant "npm run build". To make this build file work as URL tracking extension we have to make make following changes :-

### Background script

We have to add a background.js file to build file. In this file all the functionalities have to be written which track URL whenever this extension works on chrome browser. [Tabs](https://developer.chrome.com/extensions/tabs) feature from [chrome extension API](https://developer.chrome.com/extensions/api_index) is used. 

### Manifest

To make it work as extension we have make some changes which will look like this :-
```
  
{
  "short_name": "Test Extension 1.0",
  "name": "Test Extension 1.0",
  "version":"1.0",
  "manifest_version":2,
  "browser_action":{
    "default_popup":"index.html"
  },
  "content_security_policy": "script-src 'self' 'sha256-43Ko6s/Rf5AvLRRw5uezBBG8rjI7/9cvk4STSOBfRBE='; object-src 'self'",
  "background": {
    "scripts": ["background.js"], 
    "persistent":false
  },
  "permissions": [
    "tabs"  //this is the tabs dependency used form chrome extension API
  ]
}
```

## Deploy

After completing these steps only we have to follow these steps :-
1. open chrome [extension](chrome://extensions/).
2. Enable Developer mode on right upper corner.
3. Drag your build file and drop to the extension page of chrome.


## Built with

- Javascript
- ReactJs
