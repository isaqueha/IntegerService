# Incrementing Integers As A Service

The UI application for this service can be found at:
https://github.com/isaqueha/IntegerUI

## Running
This application can be found running at:
https://integerservice.herokuapp.com/

You can try the service with the following routes:

1. GET [`integerservice.herokuapp.com/`](https://integerservice.herokuapp.com/)
2. POST [`integerservice.herokuapp.com/user`](https://integerservice.herokuapp.com/user)
3. GET [`integerservice.herokuapp.com/current`](https://integerservice.herokuapp.com/current)
4. PUT [`integerservice.herokuapp.com/current`](https://integerservice.herokuapp.com/current)
5. GET [`integerservice.herokuapp.com/next`](https://integerservice.herokuapp.com/next)


## Local Installation
1. Clone this repository;
2. Run `npm install`;
3. Run `npm start`;
4. Open `http://localhost:3333/` and try the routes.

## Routes

> OBS.: Open the following file in Insomnia to check the routes described below:
[`Insomnia_2019-11-08.json`](./Insomnia_2019-11-08.json) 


### 1. GET [`localhost:3333/`](http://localhost:3333/)
Root route, checks if the service is running;

### 2. POST [`localhost:3333/user`](http://localhost:3333/user)
Creates an user based on `email` and `password` parameters passed as a JSON object in the request Body.
Returns an `api_key` to be used for auth and for selecting the user's "integer counter".

Example Body:
```
{
	"email": "email@email.com",
	"password": "Email!0"
}
```

The password is not stored, but rather, hashed by the `crypto` Node module inside the [`Hasher.js` file](./src/util/Hasher.js) 

### 3. GET [`localhost:3333/current`](http://localhost:3333/current)
Returns the current Integer value for the given user.
The API Key for the user should be passed in the request Headers in order to fetch the correct value.
If an invalid API Key is passed, the service returns an error message.

Example header:
```
api_key: dafgfl=
```

Example return:
```
{
  "current": 12
}
```

### 4. PUT [`localhost:3333/current`](http://localhost:3333/current)
Modifies the current Integer value for the given user.
A `current` value should be passed as a JSON object in the request Body.
The API Key for the user should be passed in the request Headers in order to fetch the correct value.
If an invalid API Key or invalid number is passed, the service returns an error message.

Example Body:
```
{
	"current": 23
}
```

Example header:
```
api_key: dafgfl=
```

Example return:
```
{
  "current": 23
}
```

### 5. GET [`localhost:3333/next`](http://localhost:3333/next)
Returns the next Integer value for the given user, altering the value for the current integer.
The API Key for the user should be passed in the request Headers in order to fetch the correct value.
If an invalid API Key is passed, the service returns an error message.

Example header:
```
api_key: dafgfl=
```

Example return:
```
{
  "current": 24
}
```

## Dependencies

### DB
This app connects to an personal Demo instance of MongoDB Atlas. 
It uses MongoDB to store documents of two entities: `integers` counters and `users` schemas.

### Express.js
Used as the base for the web application, enabling router, formatting and other functions.

### Mongoose
Makes Modeling and Connecting MongoDB easier.

### CORS
CORS is used here for Cross-Origin Resource Sharing (CORS) to avoid issues when communicating between different running applications.


## Limitations

### TDD
The approach used was plain feature development.
Test Driven Development (TDD) was not used here for simplicity and little previous experience reasons.

### Demo MongoDB
This application uses a personal Demo MongoDB Atlas instance. 
A different approach like a DB service or application would better if there was more time available.

### Authorization
The API Keys are generated with the User`s password and conventional Crypto functions.
For an improved and more secure service, advanced Authorization and Security approaches should be used. 


## Time
30 min
1 hour
30 min
30 min
30 min
30 min
30 min
1 hour

Total: 5:00