
# REST-api on pure node.js 

**Project**: Online DVD rental 

- node.js 
- TypeScript
- Sequelize
- PostgreSQL
- Redis

**Key feature**
- Two-layer of cahing: In-memory and Redis (in-memory - 15 seconds, redis - 30 seconds)
- If at the time of the request from the client there is no data in the cache, but the server is already busy retrieving the same data from the database (that is, two or more identical requests from the client arrived almost simultaneously, and there is no data in the cache), then a later request must wait until the data will appear in the cache, and return them already from there.

## Database
There is uses the DVD rental database sample:
https://neon.tech/postgresql/postgresql-getting-started/postgresql-sample-database


## Installation & Run
```bash

# run dev server (it automaticaly create db and seed data)
docker-compose up -d dvd-rental-api


#run tests
docker-compose run --rm dvd-rental-api npm test

```

## Installation problems

**Initialization of db**

Error: "/usr/local/bin/docker-entrypoint.sh: line 174: /docker-entrypoint-initdb.d/restore.sh: cannot execute: required file not found" 

Try install project through downloading as zip, not through "git clone..."  


## API

#### /actor
* `GET` : Get all actors

#### /film
* `GET` : Get all films 

#### /film?title=title_of_film
* `GET` : Filter films by title

#### /film_actor
* `GET` : Get all relationships between films and actors 

#### /category
* `GET` : Get all film’s categories 

#### /category
* `GET` : Get all film’s categories 

#### /film_category
* `GET` :  Get all relationships between films and categories

#### /store
* `GET` :  Get all store data including manager staff and address

#### /inventory
* `GET` :  Get all stores inventory data

#### /rental
* `GET` :  Get all rental data

#### /payment
* `GET` :  Get all customer’s payments

#### /staff
* `GET` :  Get all staff data

#### /customer
* `GET` :  Get all customer data

#### /address
* `GET` :  Get all address data for staff and customers

#### /city
* `GET` :  Get all city names

#### /country
* `GET` :  Get all country names


