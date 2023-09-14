# UI Weather App

This ui application demonstrates basic interaction with a free REST api provided by [weatherapi.com](https://www.weatherapi.com/).

## How to run locally

- Requirements: node + a package manager
- Running this aplication locally requires an API key from [weatherapi.com](https://www.weatherapi.com/).
  - It can be obtained by signing up for their free tier service [here](https://www.weatherapi.com/signup.aspx).
- Define an environment variable titled "VITE_API_KEY" with the value of the API key from weatherapi.com
  - instructions on how to do this can be found [here](https://vitejs.dev/guide/env-and-mode.html#env-files)

To install packages:

```
npm i
```

To start the application on a local server

```
npm start
```

## Technologies Used

While this application is relatively simple in terms of functionality, it does demonstrate a number of useful technologies for front end development:

- [SASS](https://sass-lang.com/), a CSS extension language
- [React Suspense](https://react.dev/reference/react/Suspense) functionality
- [Axios](https://axios-http.com/docs/intro) for sending http request
- [useQuery](https://tanstack.com/query/v4/docs/react/overview) for caching rest requests
- [Geolocation API](https://www.freecodecamp.org/news/how-to-get-user-location-with-javascript-geolocation-api/#:~:text=The%20JavaScript%20Geolocation%20API%20provides,permission%20to%20locate%20the%20device.) for accessing a user's current location via the browser
