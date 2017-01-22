# karmapoint

This project's mission is to allow users to register and sign up to allow for there to be a tracking system as volunteers. During a time where it's imperative for all to have a skillset before becoming employable it is very important to gather as many skills as possible 

## Database Setup
Install postgres app AND postico app then run both, then create a database called "karmapoint" within postico.

```
{
  "development": {
    "username": "NAME",
    "password": null,
    "database": "karmapoint",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "NAME",
    "password": null,
    "database": "karmapoint",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "NAME",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
```

In the config folder, create a file named config.json. Then, copy the contents above and paste it into the config.json file you created.

Also, change the "username", "database", and "dialect" fields in the config.json
file. Username should be your username for the database, database should be
"karmapoint", and dialect should be "postgres".

Change the fields for development, test, and production

## Start
First: `npm install`
To start: `npm start`

## Seeding
To seed the database, go into the backend directory and then enter `node seed/seed` into the terminal