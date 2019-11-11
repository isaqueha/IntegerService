# Incrementing Integers As A Service

## User Story
Please check `UserStory.md`.

## Installation
1. Clone this repository;
2. Run `npm install`;
3. Run `npm run dev`;
4. Open `http://localhost:5000/` and try the routes.

## Routes

> OBS.: Open the following file in Insomnia to check the routes described below:
[`Insomnia_2019-11-08.json`](./Insomnia_2019-11-08.json) 


### 1. GET [`localhost:5000/`](http://localhost:5000/)
Root route, checks if the service is running;

### 2. POST [`localhost:5000/user`](http://localhost:5000/user)
Creates an user based on `email` and `password`, returning `api_key` to be used as auth.

### 3. GET [`localhost:5000/current`](http://localhost:5000/current)

### 4. PUT [`localhost:5000/current`](http://localhost:5000/current)

### 5. GET [`localhost:5000/next`](http://localhost:5000/next)


## Dependencies

### DB
This app connects to a instance of MongoDB Atlas

### CORS

### Express

### Mongoose

### JSON-Api


## Limitations
- No TDD
- DB is Demo
- Simple auth


## Time
30 min
1 hour
30 min
30 min
30 min
30 min

Total: 3:30