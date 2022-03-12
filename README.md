# Application Title: Viben

Connect. Share. Vibe. I created this app because I love to adventure and love to share photos with my friends. This application allows the user to create an account and sign in to post images ('vibes'), add them to a 'favorites' section, and share them on a global feed, where other users can view and like each other's vibes. Now go on and get Viben!

### App Use Instructions

To view the live application, follow the 'deployed client' link below, and Sign Up to create an account or Sign In with the following credentials:

- Email: test@test.com
- Password: test

### Setup Steps on Local Device

1. Fork and clone this repository.
2. Install dependencies with `npm install`.
3. Install app icons with `npm install react-icons --save`.
4. Install react bootstrap ui-kit with `npm i mdb-react-ui-kit`.
5. Start front end application on your local host with `npm start`.

## Important Links

- [Deployed Client](https://gargygargz.github.io/viben-client)
- [Deployed API](https://quiet-brushlands-25069.herokuapp.com)
- [API Repository](https://github.com/gargygargz/viben-api)

### User Stories

#### MVP

- As an unregistered user, I would like to sign up with email, username, and password.
- As a registered user, I would like to sign in with email and password.
- As a signed in user, I would like to change password.
- As a signed in user, I would like to sign out.
- As a signed in user, I would like to create a vibe item with title, description, and image URL.
- As a signed in user, I would like to update my vibe’s title, description, or image URL.
- As a signed in user, I would like to see all the vibes I create.
- As a signed in user, I would like to delete a vibe I created.

#### Stretch Goals

- As a signed in user, I would like to see all vibes from all users.
- As a signed in user, I would like to add a “like” to any vibe.
- As a signed in user, I would like to add a vibe to a favorites section.
- As a signed in user, I would like to add a comment to any vibe.
- As a signed in user, I would like to upload an image to a vibe I create.

### Technologies Used

- JavaScript
- jQuery
- HTML/CSS
- Bootstrap
- MongoDB
- Mongoose
- Express
- React

### Planning Strategy

After deciding on an app idea and title, I developed a planning board to track my progress. I wanted Viben to have a simple layout with a navigation bar and a main area for viewing content. After developing my user stories and drawing up my wireframes and ERD, I started with the backend API and created and tested the user auth (sign-up, sign-in, change password, sign-out) and vibe (create, show all, show one, update, delete) routes. I then worked on the front end and created and tested corresponding React components for the user auth and vibe CRUD actions. I then created and tested the like and favorite buttons, and last but not least, styled the app to make it as 'vibey' as possible, while maintaining a user-friendly, simple design.

### Unsolved Problems / Future Updates

- Add the ability for a user to upload an image file to a vibe.
- Add the ability for a user to comment on a vibe.

### Wireframes

![Wireframes](./public/images/Viben_wireframes.png)

### App Screenshots

![Screenshot Homepage](./public/images/Viben_homepage_ss.png)

![Screenshot All Vibes](./public/images/Viben_allvibes_ss.png)
