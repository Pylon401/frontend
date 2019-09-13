# Pynterest - Back End

**Authors**: Tammy Do, Skyler Burger, Joshua Ho

**Version**: 1.3.0

[![CircleCI](https://circleci.com/gh/Pynterest/backend/tree/master.svg?style=svg)](https://circleci.com/gh/Pynterest/backend/tree/master)

## Overview
This back end server aggregates information from GitHub, PyPI, and Reddit for consumption by the [Pynterest front end](https://pynterest.firebaseapp.com/).

## Architecture
### Frameworks
- [**aiohttp**](https://pypi.org/project/aiohttp/) : to create and run our asynchronous server

### Python Standard Library:
- [**asyncio**](https://docs.python.org/3/library/asyncio.html) : to create asynchronous coroutines and gather them for execution
- [**json**](https://docs.python.org/3/library/json.html) : to load responses from API calls into JSON format
- [**time**](https://docs.python.org/3/library/time.html) : to track the time needed to complete our requests

### Packages
- [**aiohttp_cors**](https://pypi.org/project/aiohttp_cors/) : to allow cross-origin resource sharing to our front end which is deployed on Firebase
- [**feedparser**](https://pypi.org/project/feedparser/) : to parse RSS/XML feed data
- [**pytest**](https://pypi.org/project/pytest/) : to test our codebase
- [**uvloop**](https://pypi.org/project/uvloop/) : to replace asyncio's default event loop with a faster event loop that utilizes Cython

### Continuous Integration
- [**CircleCI**](https://circleci.com/) : to manage continuous integration based on the results of our pytest testing suite

## API
- **/** : a call to the root route will return a JSON object containing results from six API requests to be consumed by a front end

## Change Log
09-09-2019 - 1.1.0
- Added GitHub and PyPI API integration

09-10-2019 - 1.2.0
- Added Reddit API integration

09-11-2019 - 1.3.0
- Deployed to [Heroku](https://pyn-terest.herokuapp.com/)
- Added CORS functionality

09-12-2019 - 1.4.0
- Added testing
- Added CircleCI integration

#Create-React-App README.md Notes

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
