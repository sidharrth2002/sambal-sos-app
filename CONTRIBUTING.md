<h1 align="center"> Contributing (Technical) </h1>

Currently, our team consists of mostly student developers, and we are running on a 0 budget. Maintaining the [Sambal SOS App](http://sambalsos.com/) involves financial costs, hence we are opening up to the public for volunteering or contributions.

This Project is completely Open Source and we welcome all efforts to help the app grow and develop

## Table of Contents

- [Monorepo](#monorepo)
- [Frontend](#frontend)
  - Prerequisites
  - How To Get Google Auth Keys
  - How To Install the App
  - Project Structure
- [Backend](#backend)
  - Prerequisites
  - How To Install the App
  - Project Structure
  - Tech Stack
- [Protocols](#protocols)
- [Pull Request Template](#pull-request-template)
- [Branches](#branches)

## Monorepo

A while back, we migrated separate repositories into a monorepo to streamline collaboration and CI/CD processes. The monorepo is managed by Lerna, housing two packages: the webapp and the server. The webapp is deployed onto Vercel, while the server lives on GCP App Engine. The database lives on a Digital Ocean droplet; it was originally on GCP Cloud SQL, but was moved to a droplet after rising maintenance costs. 

## Frontend

### Prerequisites

This app uses multiple APIs and has a list of env variables needed to start the app

follow the [.env template](./packages/webapp/.env.example) to setup your own

if you don't have the variables some parts of the app will not work

### How to Get google auth keys

this corresponds to `REACT_APP_GOOGLE_AUTH_CLIENT_ID` in the .env files

1. Create an account in <a>https://console.developers.google.com</a>

2. Create a new project
   <br />
   <br />
    <img src="./screenshots/step 1.1.png" />
   <br />
   <br />
   <img src="./screenshots/step 1.2.png" />

3. Go to the Credentials Tab of your project
    <br />
   <br />
   <img src="./screenshots/step 2.png"/>

4. Click on Create Credentials and Choose the OAuth Client ID option
    <br />
   <br />
   <img src="./screenshots/step 3.png" />

after this you should be provided with a prompt that lets you copy the client id, paste it in the .env file and you are good to go

### How to Install the app

1. Clone the project
   `$ gh repo clone sidharrth2002/sambal-sos-app `

2. Install Dependencies
   `$ npm install`

3. Start the Development Server
   ` $ npm start`

> the script will bring you to your default browser, wait for the development server to fully start and you are ready to go

### Project Structure (packages/webapp)

| Directory | Description                    |
| --------- | ------------------------------ |
| /public   | Stores static files and images |
| /src      | Stores main content of project |

> src
>
> - **/api**-> endpoint to get geolocation data
> - **/app** -> handles state in the app (redux)
> - **/assets** -> static assets
> - **/components** -> organize components
> - **/constants** -> stores configurations and constants
> - **/features** -> currently contains the auth slice (handles authentication and state of auth)
> - **/screens** handles each page of the app

    - *Auth* -> login & signup page
    - *Foodbanks* -> contains a static list of food banks and the respective page
    - *Home* -> contains the main page of the app (with the google maps component)
    - *PrivacyPolicy* -> self explanatory
    - *ReportForm* -> form page to report or request SOS

> - **/style** -> stores the styling of the appp
> - **/translations** -> contains i18n translation files
> - **/utils** -> extra functions to help with the app

## Backend

### Prerequisites

have postgresql installed [here](https://www.postgresql.org/download/)

1. start a session by doing `$ psql postgres ` in your terminal

2. when you see `postgres=#`, type in

```sql
 CREATE DATABASE benderaputih;
```

3. login to the db

```sql
\c benderaputih
```

4. Create postgis extension

- make sure that [postgis](https://postgis.net/install/) is installed on your computer
  while being connected to the db, paste in this line of code and run it

```sql
CREATE EXTENSION postgis;
```

### How to install

1. clone the repo
2. run `npm install`
3. create `.env` file as given in [env example](./packages/server/.env.example)
4. enter your database configs in `.env` at least for development in local.
5. run `npx sequelize db:create` It will create database for you.
6. run `npx sequelize db:migrate` It will create tables.
7. run `npm run dev`

### Project Structure (packages/server)

| Folder  | Description                                                 |
| ------- | ----------------------------------------------------------- |
| /config | stores configurations for sequelize (don't touch this)      |
| /db     | stores sequelize migrations and seeders (provide test data) |
| /logs   | stores logs of errors and messages                          |
| /src    | contains the main content -> models, controllers and routes |
| /utils  | contains extra functions                                    |

### Tech Stack

- [x] Server with Express.js
- [x] Database schema and models using Sequelize ORM.
- [x] User authentication with JWT.
- [x] StandardJs for coding standards and styling.
- [x] Request validation using Express-validator.
- [x] Morgan and Winston for server side logging.
- [x] Swagger for API documentation.

## Protocols (Applies to Both Front and Backend)

Please Follow these suggestions to make sure that the repo is organized and other people who wish to contribute can have a nice time doing so

> If you wish to be on the main team and actively contribute, we would recommend that you join our [discord server](https://discord.gg/kJUVyfzjeZ)

Otherwise you can:

1. Open an issue about something
2. Comment on Issues and Pull Requests
3. Participate in issue threads
4. Make Bug Reports
5. Make your own pull requests to solve open issues

## Pull Request Template

```NAMING CONVENTION: FEAT/FIX/REFACTOR nameOfContribution

What type of change did you make?
feat (add something new) or fix (fix an issue) or refactor (no changes to features, e.g. removing comments, logs)

Describe the changes:
1.
2.
3.

Add screenshots:


[] Does your change break anything?

Mention someone for review
@someone
```

## Branches

main -> development branch, fork or clone from this branch

production -> deployed to vercel, don't touch this
