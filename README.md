# Incrementing Integers As A Service

## Running
This application can be found running at:
https://integerservice.herokuapp.com/


## Installation
1. Clone this repository;
2. Run `npm install`;
3. Run `npm run dev`;
4. Open `http://localhost:3333/` and try the routes.

## Routes

> OBS.: Open the following file in Insomnia to check the routes described below:
[`Insomnia_2019-11-08.json`](./Insomnia_2019-11-08.json) 


### 1. GET [`localhost:3333/`](http://localhost:3333/)
Root route, checks if the service is running;

### 2. POST [`localhost:3333/user`](http://localhost:3333/user)
Creates an user based on `email` and `password` parameters passed as a JSON object in the request Body.
Returns an `api_key` to be used for auth and for selecting the user's "integer counter".
Example:

```
{
	"email": "email@email.com",
	"password": "Email!0"
}
```

The password is not stored, but rather, hashed by the `crypto` Node module inside the [`Hasher.js` file](./src/backend/util/Hasher.js) 

### 3. GET [`localhost:3333/current`](http://localhost:3333/current)
// TODO

### 4. PUT [`localhost:3333/current`](http://localhost:3333/current)

### 5. GET [`localhost:3333/next`](http://localhost:3333/next)


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

### JSON-Api
// TODO

## Limitations

### TDD
The approach used was plain feature development.
As TDD is a main 

### Demo MongoDB
// TODO

### Authotization


## Time
30 min
1 hour
30 min
30 min
30 min
30 min

Total: 3:30