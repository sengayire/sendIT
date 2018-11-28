# sendIT(V1.0)
Parcel deivery Service
SendIT is a courier service that helps users deliver parcels to different destinations. SendIT
provides courier quotes based on weight categories.
The user gets real-time email notification when an changes has been made to the status of their parcel.

i have added this app on Github pages for someone who want to look how it work must foolow it via this link

these are  all API Endpoints that will be used in the app:
* **POST/parcels** Create a parcel delivery order
* **GET/parcels** get all parcel delivery orders
* **GET/parcels/:parcelid** get specific parcel delivery order by id
* **GET/users/:userid/parcels** get all parcel delivery order for a specific user
* **PUT/parcels/:parcelid/cancel** Cancel a specific parcel delivery order
* **PUT/parcels/:parcelid/update** update destination of specific parcel 
* **GET/users** get all users
* **GET/users/:userid** get specific user by id
* **POST/users** Create a user

# Technology Tools used
* programing language: **javascript ES6** with **Babel** transpiler
* Server-side Framework: **Node/Express JS**
* Linting Library: **ESlint**
* Style Guide: **Airbnb**
* Testing Framework: **Mocha** with **Chai**

# Additional Tools
* TravisCI for Continous Integration
* Istanbul and nyc for test coverage
* CodeClimate and Coveralls for badges
* Heroku for app Deployment 

This is the  url link of the app on heroku 


For a better test you should  use [POSTMAN]

# Setup Instruction
* Install [git](https://git-scm.com/downloads)
* Install [Node js](https://nodejs.org/en/)
* install eslint with airBnb 

If you need this app source codes on your local machine clone it on your local repository by using the following command in your git bash terminal:

```
$ git clone 
```

You will find a folder named sendIT in your local machine 

```
You will need to install dependincies as in your local package.json file by using the following command:

```
$ npm install
```
To start the server use the following command
```
$ npm start or npm run dev
```
Write the following command to run the test do

```
$ npm test
```
For eslint test do eslint file_name. For example this will test main.js

```
$ eslint main.js

### Setup Instruction
SENGAYIRE Prince

### License
This project is linsenced under the candidate of  Andela BootCamp kigali cycle 1

### Acknowledgments
I acknowled Charles Odile, OlivierEsuka  and all the candidate of Andela Bootcamp kigali Cycle 1 for thier help during the development of this App.

