# Twitter Backend Project
Welcome to the Twitter Backend Project! This project provides the backend functionalities for a Twitter-like social media platform. It includes APIs for creating tweets, getting tweets, toggling likes, creating comments, user authentication, and integration with AWS S3 for storing images.

## Endpoints

1. Create Tweet: POST /tweets - Create a new tweet.
2. Get Tweet: GET /tweets/:id - Get details of a tweet by ID.
3. Create Comment: POST /comments - Create a new comment on a tweet.
4. Toggle Like: POST /likes/toggle - Toggle like on a tweet.
5. User Signup: POST /signup - Register a new user.
6. User Login: POST /login - Authenticate and log in a user.

## Controllers
1. tweet-controller: Handles tweet-related operations such as creating and getting tweets.
2. like-controller: Handles like-related operations such as toggling likes on tweets.
3. comment-controller: Handles comment-related operations such as creating comments on tweets.
4. auth-controller: Handles user authentication operations such as user signup and login.

## Middlewares
authenticate: Middleware for authenticating user requests. It ensures that only authenticated users can access protected endpoints.

## AWS S3 Integration
The project integrates with AWS S3 for storing images associated with tweets.
When creating a tweet, the image is uploaded to an S3 bucket, and the URL of the uploaded image is stored in the database.

## Getting Started
To get started with the Twitter Backend Project, follow these steps:

Clone the repository to your local machine.
Navigate to the project directory.
Install dependencies using npm install.
Set up any required databases (if applicable) and configure connection strings.
Set up an AWS S3 bucket and configure credentials in your environment or application.
Start the server using npm start.
Access the APIs using a REST client or integrate them into your frontend application.
Development
Run npm start to start the server.
You can use tools like Postman or curl to test the APIs.
