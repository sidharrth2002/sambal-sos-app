<h1 align="center"> Sambal SOS Backend </h1>

<p align="center">
  <strong>For Malaysians, By Malaysians 🇲🇾</strong>
</p>
<p align="center">
  <a href="https://discord.gg/kJUVyfzjeZ">
    <img src="https://img.shields.io/discord/859805317859377173?style=for-the-badge" alt="discord - users online" />
  </a>
  <img src="https://img.shields.io/github/languages/code-size/sidharrth2002/sambal-sos-backend?style=for-the-badge"> </img>
</p>

## README structure

| Link                                    | Description                                         |
| --------------------------------------- | --------------------------------------------------- |
| [Project Structure](#project-structure) | Guide to what goes where                            |
| [Branches](#branches)                   | Explanation of Branches and their uses              |
| [Contributions](#contributions)         | How to start contributing                           |
| [Prerequisites](#prerequisites)         | Guide to Installing Dependencies and Setup Postgres |
| [Installation](#how-to-install)         | How to start running the app                        |
| [Tech Stack](#tech-stack)               | Frameworks and Packages used                        |
| [PR Template](#tech-stack)              | Guide to making PRs                                 |

## Project Structure

| Folder  | Description                                                 |
| ------- | ----------------------------------------------------------- |
| /config | stores configurations for sequelize (don't touch this)      |
| /db     | stores sequelize migrations and seeders (provide test data) |
| /logs   | stores logs of errors and messages                          |
| /src    | contains the main content -> models, controllers and routes |
| /utils  | contains extra functions                                    |

## Branches

- production -> Production Branch, Don't touch this without permission from the admins @sidharrth2002
- main -> Development Branch, make git clones from this branch

## Contributions

The Sambal Sos App is Open Source and we welcome all efforts to improve and help this app grow

you can contribute using the following ways:

1. Creating an Issue on something
2. Commenting on Issues and Pull Requests

> if you are going to be an active contributor, you can join the discord server and contact the admins using this link [discord server](https://discord.gg/kJUVyfzjeZ)

## Prerequisites

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
* make sure that [postgis](https://postgis.net/install/) is installed on your computer
while being connected to the db, paste in this line of code and run it
```sql
CREATE EXTENSION postgis;
```

## How to install

1. clone the repo
2. run `npm install`
3. create `.env` file as given in [env example](.env.example)
4. enter your database configs in `.env` at least for development in local.
5. run `npx sequelize db:create` It will create database for you.
6. run `npx sequelize db:migrate` It will create tables.
7. run `npm run dev`

### Tech Stack

- [x] Server with Express.js
- [x] Database schema and models using Sequelize ORM.
- [x] User authentication with JWT.
- [x] StandardJs for coding standards and styling.
- [x] Request validation using Express-validator.
- [x] Morgan and Winston for server side logging.
- [x] Swagger for API documentation.

### How to make pull requests

we would prefer if the pull requests are formatted so it would streamline our workflow

```
NAMING CONVENTION: FEAT/FIX/REFACTOR nameOfContribution

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
