# Contributing

<img src="https://img.shields.io/github/issues/sidharrth2002/sambal-sos-app?style=for-the-badge">

<img src="https://img.shields.io/github/issues-pr/sidharrth2002/sambal-sos-app?style=for-the-badge">

<img src="https://img.shields.io/website?down_color=red&down_message=website%20down&style=for-the-badge&up_color=green&up_message=website%20up%20and%20running&url=https%3A%2F%2Fwww.sambalsos.com">

<img src="https://img.shields.io/github/contributors/sidharrth2002/sambal-sos-app?style=for-the-badge">

This Project is completely Open Source and we welcome all efforts to help the app grow and develop

## Prerequisites 
This app uses multiple APIs and has a list of env variables needed to start the app 

follow the [.env template](./.env.example) to setup your own

if you don't have the variables some parts of the app will not work

## How to Install the app

1. Clone the project
   `$ gh repo clone sidharrth2002/sambal-sos-app `

2. Install Dependencies
   `$ npm install`

3. Start the Development Server
   ` $ npm start`

> the script will bring you to your default browser, wait for the development server to fully start and you are ready to go

## Project Structure

| Directory | Description                     |
| --------- | ------------------------------- |
| /public   | Stores static files and images |
| /src      | Stores main content of project  |

> src
> - **/api**-> endpoint to get geolocation data 
> -  **/app** -> handles state in the app (redux)
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

## Protocols
Please Follow these suggestions to make sure that the repo is organized and other people who wish to contribute can have a nice time doing so

> if you wish to be on the main team and actively contribute, we would recommend that you join our [discord server](https://discord.gg/kJUVyfzjeZ)

otherwise you can:

1. Open an issue about something 
2. Comment on Issues and Pull Requests
3. Giving Suggestions
4. Bug Reports 

### Pull Request Template
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

### Branches
main -> development branch, fork or clone from this branch

production -> deployed to vercel, don't touch this

## Admins
@sidharrth2002
@Shaunmak1214

contact them for more information