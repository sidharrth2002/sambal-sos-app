<h1 align="center">The Sambal SOS App</h1>
<h4 align="center"> <i> Crowdsourcing Aid Data Across the Nation </i> </h4>

This is the repository for Sambal SOS and you'll find usage, folder structure and contribution details below. Sambal SOS is fully open-sourced and community driven, feel free to checkout the list of active issues and submit pull requests.

# Table of Contents

- [The #benderaputih Movement](#the-benderaputih-movement)
- [Usage](#usage)
- [About us](#about-us)
- [Contributing](#contributing)
  - [Prerequisites](#prerequisites)
  - [How to Install the app](#how-to-install-the-app)
  - [Project Structure](#project-structure)
  - [Protocols](#protocols)
  - [Pull Request Template](#pull-request-template)
  - [Branches](#branches)
  - [Admins](#admins)
  - [Monetary](#monetary)
  - [Development](#development)
  - [Other](#other)
- [Features & Milestones](#features--milestones)
- [Contact us](#contact-us)
- [Publicity](#publicity)
- [License](#license)

[Sambal SOS App](http://sambalsos.com/) is a social welfare platform that supports Malaysians in need by bridging the gap of social inequity.

Hop on the [app](http://sambalsos.com/) if you see someone who needs help when driving or in your neighbourhood and want to report it so someone can help or you're looking to support other fellow Malaysians

Built:

- By Malaysians, for Malaysians. 🇲🇾
- Developed by passionate Malaysian developers, under this time of the MCO. 🥰
- Living in a lockdown may feel uncertain, but we're in this together 💪.

## The [#benderaputih](https://twitter.com/hashtag/benderaputih) Movement

In Malaysia, the [#benderaputih](https://twitter.com/hashtag/benderaputih) movement is a social media movement urging those in urgent need of living necessities or resources to place white flags outside their homes. In this time of a pandemic, white flags placed outside homes are notices to others that they are out of food or living necessities and need help right away.

_Cited from a [tweet](https://twitter.com/NewsBFM/status/1409734501631098881) on the [BFM News](https://twitter.com/NewsBFM/) Twitter account._

As of 2nd July 2021, the [#benderaputih](https://twitter.com/hashtag/benderaputih) movement is currently one of the largest movements in our nation, and is also trending on [Twitter](https://twitter.com) under the [#benderaputih](https://twitter.com/hashtag/benderaputih) hashtag.

## Usage

Members of our community can post a picture through this web app if they see a white flag nearby and it will be displayed on a map, so that anyone on the internet can help those in need. Users of the app can also view the white flags posted in under a 10 KM radius of their physical location, to discover those in need who are nearby and possibly provide them with the needed resources.

We believe that our project will provide the necessary support for communities nationwide, and will benefit a lot of people in our communities, especially the underserved in tough times like these.

## About us

We're a team of student developers passionate to make a positive impact to our community. The development of the [Sambal SOS App](http://sambalsos.com/) is a continuous process for the time being, and we believe that developing this app is a way for us to volunteer and contribute to the communities in Malaysia.

## Contributing

Currently, our team consists of mostly student developers, and we are running on a 0 budget. Maintaining the [Sambal SOS App](http://sambalsos.com/) involves financial costs, hence we are opening up to the public for volunteering or contributions.

This Project is completely Open Source and we welcome all efforts to help the app grow and develop

### Prerequisites

This app uses multiple APIs and has a list of env variables needed to start the app

follow the [.env template](./.env.example) to setup your own

if you don't have the variables some parts of the app will not work

### How to Get google auth keys

this corresponds to `REACT_APP_GOOGLE_AUTH_CLIENT_ID` in the .env files

1. Create an account in <a>https://console.developers.google.com</a>

2. Create a new project
   <br />
   <img src="./screenshots/step 1.1.png" />
   <br />
   <img src="./screenshots/step 1.2.png" />

3. Go to the Credentials Tab of your project
   <br />
   <img src="./screenshots/step 2.png"/>

4. Click on Create Credentials and Choose the OAuth Client ID option
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

### Project Structure

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

### Protocols

Please Follow these suggestions to make sure that the repo is organized and other people who wish to contribute can have a nice time doing so

> If you wish to be on the main team and actively contribute, we would recommend that you join our [discord server](https://discord.gg/kJUVyfzjeZ)

Otherwise you can:

1. Open an issue about something
2. Comment on Issues and Pull Requests
3. Participate in issue threads
4. Make Bug Reports
5. Make your own pull requests to solve open issues

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

### Monetary

If you're willing to support us financially, please do get in touch with us!
Monetary donations will be primarily utilized for maintenance costs of the [Sambal SOS App](http://sambalsos.com/), which includes: server costs, domain costs, etc.

### Development

Sambal SOS is built from the ground up on a monster stack: React.js (Chakra UI, Redux), Node.js (Express), PostgreSQL and Google Cloud.
Read about the development workflow, the issues we faced and how we solved them [here](https://medium.com/@sidharrth2002/how-sambal-sos-scaled-the-complete-development-workflow-8b5401bd952c).

The frontend is hosted on Vercel, while our backend lives on App Engine.

If you have experience in any of the following skills, you're exactly who we're looking for to join the team:

- frontend development (JavaScript, React.js)
- backend development (Node.js, Express.js)

### Other

If you're interested to support us in other ways, do reach out to us using any of the contact details listed in the [Contact us](src/README.md#Contact) section.

## Features & Milestones

The features and milestones that we plan to achieve for [Sambal SOS App](http://sambalsos.com/) are:

- ✅ @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- ✅ Users having the ability to post white flag incidences
- ✅ Users having the ability to view white flag incidences within a 10 KM radius of the user's location
- ✅ Users having the ability to view food banks within a 10 KM radius of the user's location

## Contact us

Let's connect! 📧

[Email ✉](mailto:sambalsos.app@gmail.com)
\
[Discord 👾](https://discord.gg/9QeJu9M9)

## Publicity

In the previous months, our app has gained the attention of the media, helping us widen our userbase

here are the articles related to our app:

1. JUICE (https://juiceonline.com/bendera-putih-app-track-white-flag-food-bank-locations/)
2. Vulcan (https://vulcanpost.com/751770/kibar-bendera-putih-app-find-white-flags-food-banks/)
3. SAYS (https://says.com/my/tech/student-built-bendera-putih-app-allows-users-to-upload-white-flags-food-banks-on-map)
4. TechNave (https://technave.com/gadget/Local-students-developed-an-app-called-Sambal-SOS-to-assist-the-Bendera-Putih-movement-25579.html)
5. Firstclasse (https://firstclasse.com.my/bendera-putih-app-sambal-sos-developers/)
6. The Star (https://www.wargabiz.com.my/2021/07/07/four-local-students-launched-sambal-sos-app-for-msians-to-locate-white-flags-food-banks/)
7. KL foodie (https://klfoodie.com/sambal-sos-app-bendera-putih-malaysia)

Please help us spread word about the app on your favorite social media platforms. People knowing about our existance helps grow the app and provides assistance to the needy, especially during times of crisis.

## License

[Sambal SOS App](https://www.sambalsos.com/) is open source, licensed under the [MIT](https://choosealicense.com/licenses/mit/) license
