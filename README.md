# Social Network API 🌐

## Description

An API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list.

## User Story

As a social media startup, I want an API for my social network that uses a NoSQL database so that my website can handle large amounts of unstructured data.

## Acceptance Criteria

When the user enters the command to invoke the application (```npm start```), the server is started and the Mongoose models are synced to the MongoDB database.

The user can then open API GET routes in Insomnia for users and thoughts, and the data for each of these routes is displayed in a formatted JSON. The user tests API POST, PUT, and DELETE routes in Insomnia and is able to successfully create, update, and delete users and thoughts in the database.

When the user tests API POST and DELETE routes in Insomnia, they are able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list.

## Technologies Used

* [MongoDB](https://www.mongodb.com/)
* [Mongoose](https://mongoosejs.com/)
* [Express](https://expressjs.com/)
* [Insomnia](https://docs.insomnia.rest/)