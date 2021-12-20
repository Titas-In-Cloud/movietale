# Movietale

<h3 align="center">
    Home Page
</h3>

![movietale](./client/src/images/readme1.PNG)
![movietale](./client/src/images/readme2.PNG)
![movietale](./client/src/images/readme3.PNG)
----
## Description
**Movietale** is a website for a small rural movie theatre. The client wanted to have a website to inform the 
customers about featured movies, upcoming movies and show times. It was developed for **CSC3131** module at 
*Newcastle University*.

## Installation
To set up the project you need to have _Docker_ installed, to do this you can get to know more 
[here](https://docs.docker.com/get-docker/).

### Running the application
After your _Docker_ is set up, all you need to do to launch the application is to run the following command in 
the main directory of the project: 

> docker-compose up

It will install all required dependencies for the project and start the database, server and client sides. 
Once it finishes to load, go to [http://localhost:3000](http://localhost:3000) or click the link in the
Terminal.

### Running tests
To run the unit tests, go to '/server' directory and run following command in the Terminal:

> npm test

This will run all unit tests and will output which ones pass and which ones fail.

### Stopping the application.
To stop the application press **CTRL+C**. This will close all _Docker_ container and will stop database,
server and client sides.

## Usage
The web application has different pages for regular users, logged-in users and admin users. Below I will explain
what each type of user will be able to do on this cinema website.

----
### Regular user
The website for regular users will look very similar to users who are logged in, however, some functionality
can only be accessed once you log in.

#### Home page
Each user is greeted by the home page, where the users can see the top navigation bar with cinemas logo,
photo slideshow of the cinema, buttons to choose the dates for the movies to watch, movie posters and a bottom
footer with buttons to get to know more about the cinema as well as go to their social media accounts.

**Top navigation bar** has button to the home page - _Movies_, button to the list of all the movies - 
_Repertoire_, button to register or login - _Login_, and a search bar where the user can search movies by
either genres or search query.

**Buttons to choose movies by date** this functionality has not yet been implemented, however, on the backend
the methods are ready to be used.

**Movie posters** are clickable and user can go to the details page of the movie by clicking on them.

**Footer** is for decoration purposes. _About Us_, _Rules of Cinema_ and _Team_ buttons do not forward user
to the specific page. _Facebook_ and _Instagram_ logos forward user to the social media platform, but since
this company does not exist it does not forward to the specific company page.

#### Repertoire
This page has a list of all the movies being shown by the cinema. Each movie poster can be clicked and user
will be forwarded to movie details page.

#### Search
User can search movies by a search query or genre. If no movies are found the message _No movies available_ is
returned.

#### Movie details page
Users can click on any of the movie posters on either _Movies_, _Repertoire_ or _Search_ pages to be forwarded
to movie details page. Here you will see all the details about the movie on the right, and a movie poster
photo on the left.

#### Login and Register page
Users can either log-in or register a new account. Each new user needs to provide full name, email which has 
to be unique, and a password which needs to be minimum of 6 characters long. Providing wrong information 
the user will be prompted with a warning message. Trying to log-in with wrong credentials' user will be prompted
by a warning message.

----
### Logged-in user
Logged-in user has all the functionality that the regular user has, however, he has an extra page called 
_Favourites_ which shows all the movies that the user has liked and functionality of adding liked movies to
his list.

#### Favourites page
This page has all the movies that the logged-in user has liked.

#### Liking the movie
To like the movie you have to be a logged-in user and all you have to do is press the white heart button on the
top right of the movie poster on either _Repertoire_ or _Search_ pages. Once the user will press the button,
the heart will become red, and the liked movie poster will appear in the _Favourites_ page.

_**Disclaimer!**_ the heart button and _Favourites_ page is only shown to logged-in users.

#### Logging-out
To log out the user has to press logout button on the top navigation bar. The button changes states to either be
_Login_ to regular user and _Logout_ to logged-in user.

----
### Admin
The website has an admin page where the maintainers of the project can upload new movie posters, edit or delete
the current ones. The admin page can be reached with the email and password below, and it is integrated on the 
client side of the main application.

#### Admin details
Email: movietale@support.com <br />
Password: bestadminpassword123 <br />

#### Creating new movie poster
To create a new movie poster start inputting all the details into the movie creation form, selecting the session
times and selecting the movie poster photo (there are some movie poster photos to be used in the client side: 
client/src/images/moviePosters).

_**Warning!**_ Movie create/edit form gets all the input information as a _String_, thus, the user who is
editing or creating movie poster is responsible that the information is put correctly.

#### Editing movie poster
To edit current movie poster you need to have at least one movie poster created. Click on the white three dots
button on the left of the movie poster, and you will be forwarded to the top of the screen to the movie 
create/edit form. The form will be filled with all the details of the movie which you selected to edit. To edit
the details change anything you want to change and press **Submit** button at the bottom, your changes will be
saved. If you are not happy with your changes press **Clear Form** button, and your changes will be discarded. 

_**Warning!**_ Movie create/edit form gets all the input information as a _String_, thus, the user who is 
editing or creating movie poster is responsible that the information is put correctly.

#### Deleting movie poster
To delete current movie poster you need to have at least one movie poster created. Click on the red trash can 
button on the right of the movie poster, and the confirmation window will pop. You can either confirm your
choice of deleting the movie poster or canceling the operation. If you choose to confirm deletion of the poster,
the poster will be deleted from the database.

#### Going back
To go back to the main client side just press logout button, and you will be logged out. You will return to
regular client side.

----
### License
This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/) see the LICENSE.md file
for more details.