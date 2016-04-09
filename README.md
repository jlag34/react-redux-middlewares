# React Redux Middlewares

This app was built to explore how to build custom middlewares. Please see file
https://github.com/jlag34/react-redux-middlewares/blob/master/src/middlewares/async.js

Goal: A) Find actions that had a promise in their payload
       - Unwrap the promise
       - Run the new data back through the middlewares
      B) If no promise, pass to next middleware
      
App also consumes user data from JSONPlaceholder: http://jsonplaceholder.typicode.com/

###Getting Started###
```
	> npm install
	> npm start
```

The app runs on localhost:8080.
