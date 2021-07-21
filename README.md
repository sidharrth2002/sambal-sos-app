<h1 align="center">The Sambal SOS App</h1>

<p align="center">
    <img src="https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/209366870_107350384947725_2117872645097933309_n.png?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=ymfBYb-3XBkAX-wE__9&_nc_ht=scontent.fpen1-1.fna&oh=cc77f617d14b12cbbfdddaea349330a6&oe=60FD4FB8" align="center" width="300px">
</p>

<h4 align="center"> <i> Formerly the Bendera Putih App </i> </h4>

<p align="center">
    <img src="https://img.shields.io/github/license/sidharrth2002/sambal-sos-app?style=for-the-badge">
<a href="https://discord.gg/kJUVyfzjeZ">
    <img src="https://img.shields.io/discord/859805317859377173?style=for-the-badge" alt="discord - users online" />
</a>
<img src="https://img.shields.io/github/languages/code-size/sidharrth2002/sambal-sos-app?style=for-the-badge">
</p>

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

Hop on the [app](http://sambalsos.com/)  if:
- you see someone who needs help when driving or in your neighbourhood and want to report it so someone can help
- you're looking to support other fellow Malaysians

Built:
- By Malaysians, for Malaysians.  🇲🇾
- Developed by passionate Malaysian developers, under this time of the MCO. 🥰
- Living in a lockdown may feel uncertain, but we're in this together 💪.

## The [#benderaputih](https://twitter.com/hashtag/benderaputih) Movement
In Malaysia, the [#benderaputih](https://twitter.com/hashtag/benderaputih) movement is a social media movement urging those in urgent need of living necessities or resources to place white flags outside their homes. In this time of a pandemic, white flags placed outside homes are notices to others that they are out of food or living necessities and need help right away. 

_Cited from a [tweet](https://twitter.com/NewsBFM/status/1409734501631098881) on the [BFM News](https://twitter.com/NewsBFM/) Twitter account._

As of 2nd July 2021, the [#benderaputih](https://twitter.com/hashtag/benderaputih) movement is currently one of the largest movements in our nation, and is also trending on [Twitter](https://twitter.com) under the [#benderaputih](https://twitter.com/hashtag/benderaputih) hashtag.


## Usage
Members of our community can post a picture through this web app if they see a white flag nearby and it will be displayed on a map, so that anyone on the internet can help those in need.  Users of the app can also view the white flags posted in under a 10 KM radius of their physical location, to discover those in need who are nearby and possibly provide them with the needed resources.

We believe that our project will provide the necessary support for communities nationwide, and will benefit a lot of people in our communities, especially the underserved in tough times like these.

## About us
We're a team of student developers passionate to make a positive impact to our community. The development of the [Sambal SOS App](http://sambalsos.com/) is a continuous process for the time being, and we believe that developing this app is a way for us to volunteer and contribute to the communities in Malaysia.

## Contributing
<img src="https://img.shields.io/github/issues/sidharrth2002/sambal-sos-app?style=for-the-badge">

<img src="https://img.shields.io/github/issues-pr/sidharrth2002/sambal-sos-app?style=for-the-badge">

<img src="https://img.shields.io/website?down_color=red&down_message=website%20down&style=for-the-badge&up_color=green&up_message=website%20up%20and%20running&url=https%3A%2F%2Fwww.sambalsos.com">

<img src="https://img.shields.io/github/contributors/sidharrth2002/sambal-sos-app?style=for-the-badge">

Currently, our team consists of mostly student developers, and we are running on a 0 budget. Maintaining the [Sambal SOS App](http://sambalsos.com/) involves financial costs, hence we are opening up to the public for volunteering or contributions.

This Project is completely Open Source and we welcome all efforts to help the app grow and develop

### Prerequisites 
This app uses multiple APIs and has a list of env variables needed to start the app 

follow the [.env template](./.env.example) to setup your own

if you don't have the variables some parts of the app will not work

### How to Install the app

1. Clone the project
   `$ gh repo clone sidharrth2002/sambal-sos-app `

2. Install Dependencies
   `$ npm install`

3. Start the Development Server
   ` $ npm start`

> the script will bring you to your default browser, wait for the development server to fully start and you are ready to go

### Project Structure

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

### Protocols
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
- social media management
- crowdsourcing data

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

[Email ✉](mailto:info.benderaputih@gmail.com)
\
[Discord 👾](https://discord.gg/9QeJu9M9)

## Publicity 

<img src="https://img.shields.io/github/forks/sidharrth2002/sambal-sos-app?style=social">
<img src="https://img.shields.io/github/watchers/sidharrth2002/sambal-sos-app?style=social">
<img src="https://img.shields.io/github/stars/sidharrth2002/sambal-sos-app?style=social">

In the previous months, our app has gained the attention of the media, helping us widen our userbase

here are the articles related to our app:
1. JUICE (https://juiceonline.com/bendera-putih-app-track-white-flag-food-bank-locations/)
2. Vulcan (https://vulcanpost.com/751770/kibar-bendera-putih-app-find-white-flags-food-banks/)
3. SAYS (https://says.com/my/tech/student-built-bendera-putih-app-allows-users-to-upload-white-flags-food-banks-on-map)
4. TechNave (https://technave.com/gadget/Local-students-developed-an-app-called-Sambal-SOS-to-assist-the-Bendera-Putih-movement-25579.html)
5. Firstclasse (https://firstclasse.com.my/bendera-putih-app-sambal-sos-developers/)
6. The Star (https://www.wargabiz.com.my/2021/07/07/four-local-students-launched-sambal-sos-app-for-msians-to-locate-white-flags-food-banks/)
7. KL foodie (https://klfoodie.com/sambal-sos-app-bendera-putih-malaysia)

Please help us spread word about the app on your favorite social media platforms

people knowing about our existance helps grow the app and provides assistance to the needy, especially during times of crisis

## License
[Sambal SOS App](http://sambalsos.com/) is open source, licensed under the [MIT](https://choosealicense.com/licenses/mit/) license