![image](https://user-images.githubusercontent.com/67261194/154273413-889a7822-9591-4927-9574-8cb1cb5276d3.png)

## Get Started
 #### Clone the repo:
<code> git clone https://github.com/Yanir-R/UserManagementSystem.git </code>
#### Install dependencies :
<code> npm i </code>
###### Install npm i inside client & server folders
#### Run the Server With Data:
<code> npm run preload </code>
###### Run ONLY for load the data
#### Run the Server:
<code> npm run dev  </code>
###### If you already loaded the data, you can use this command for development environment
###### [nodemon](https://www.npmjs.com/package/nodemon) a wrapper  for node, will restart the server on file changes
#### Run The Client:
<code> npm start </code>
######  build and serves the client side, will also restart the service on file changes

## Introduction
React & NodeJS app with connection to MongoDB that can preload dummy data into an organized table,
You can insert\edit\save\delete user & search user by their surname,
You can see more info that base on the user IP address that I pulled from [ip-api](https://ip-api.com/) 

## Features
- [X] Create, Save, Edit & Delete users that you created that are saved in MongoDB database
- [X] Preload dummy-data to MongoDB from JSON file
- [X] Search based on surname
- [X] Get more info that based on IP that you filled, from [ip-api](https://ip-api.com/) 
- [X] Validations on add\edit user form
- [X] Simple Server Validtions
- [X] Responsive Design

## Instructions
- Initially the application with your browser at <code>http://localhost:3000/</code> <br/>
  you will see an empty table with a header of <code>No Data Found</code>
- Run the app at <code>Server Folder</code> with the command <code> npm run preload </code> if you want to see dummy-data or you can click on <code>Add User</code> button for adding one by yourself
- You can search user by their surname <sub><sub>search works only for surname</sub></sub>
- <code>View</code> button on a specific user will open a new page with the user details & with extra details that I bring from [ip-api](https://ip-api.com/) that takes the IP address & gives you more info about that user
- Add\Delete & edit user will of course add\delete or edit a user (:
- The edit button will let you edit the specific user you choose

## Motivation
I created the project to test my abilities With API, React & Bootstrap.


## Technologies

<p align="flex"> 
<img src="https://img.icons8.com/nolan/64/react-native.png" alt="reactjs"/>
<img src="https://img.icons8.com/nolan/64/html-5.png"  alt="html"/>
<img src="https://img.icons8.com/nolan/64/css-filetype.png" alt="css"/>
<img src="https://img.icons8.com/nolan/64/js.png" alt="javascript"/>
<img src="https://img.icons8.com/color/48/000000/mongodb.png" alt="mongodb"/>
<img src="https://img.icons8.com/color/48/000000/nodejs.png" alt="nodejs"/>
</p>


## License MIT © [Yanir-r]()
