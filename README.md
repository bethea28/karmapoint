# karmapoint

##Objective
This project's mission is to revolutionize the volunteer system. It will make it easier for both organizers and potential volunteers who do not know of any local places that needs help using Aunt Bertha and Google Maps API. 

It will allow users to register and sign up to allow for there to be a tracking system as volunteers. It will be a point system where hours logged equals karma points accumulated over time, organizers can also leave comments along with skillsets demonstrated during the time there. Users cannot give other users points rather only verified companies and organizers can do so.

Upon sign-up it will log your future accumulated points/stars that potential employers/college boards can see. Companies that sign up must be verified before being licensed a company/organizer account.

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