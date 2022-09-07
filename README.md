# Motivation and Learning Objectives

Languages used - typescript, react, redux

This weather app solves a problem I have had since I started gardening - should I water my garden.

It's not always very easy to know the answer to this, especially if you have been away from home for a few days.
The forecast apps on your phone are great for predicting the weather, but they rarely tell you whether their predictions have come true!
Did it rain? If so, how much?

My weather app shows you the actual weather for the past 5 days, the average max temperature and the amount total of rain in the last 30 days.
With this information, a gardener finally has a good idea of whether the garden needs some watering or even how much water to give.

This is my first typescript project, whilst also implementing some redux.

The main challenge faced was the historical weather data API, which returned the search city as part of the response body. 
This was tricky to implement with typescript, as it was difficult to organise interfaces that could change the key value pair to match the name of the search city, for example, London.

Future updates: I would like to change the styling, my idea is to make the information much more visual by splitting the screen into two sections:
The top half is the sky and depending on the current weather will be clear or cloudy or raining.
The bottom half will show the ground, and depending on the drought index will be sandy for very dry and lush green grass for if there has been a lot of rain.

Known bugs: When an invalid city is searched, the pop up box does not close when the close button is pressed. Only a full refresh of the webpage can restore functionality.

# Instructions

Fork and clone the repo into a code editor

In the terminal install the dependencies with npm install and then run the react app with npm run

Enter a city into the input form, then click the search button

The appropriate data should render, or a warning if the city was not found

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
