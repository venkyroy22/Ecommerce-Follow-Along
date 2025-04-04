# Ecommerce-Follow-Along

In this is a follow along project, we will build an Ecommerce Application using MERN Stack (MongoDB, Express.js, React.js, and Node.js). This project key features are, REST API Creation: Through the mentor-guided project, we will learn to build scalable APIs.
Authentication: We will get to learn to implement secure login and registration functionalities. -Database Schema Design: We will get to explore how to create structured data models using MongoDB.
Backend Development: As a part of the project, we will learn to set up robust server-side logic with Node.js and Express.


### Milestone 1: Project Overview

The MERN stack is a popular way to build web apps. It’s great because it uses just one language—JavaScript—for everything, making it easier for developers to work on both the front-end (what users see) and the back-end (how things work behind the scenes).

MongoDB is used instead of regular SQL databases because it can store a lot of data without needing it to be in a fixed structure, which makes it more flexible.

To connect the user interface and the server, we use REST APIs. These help send and receive data smoothly.

Mongo DB is used instead of SQL so that a large amount of data can be stored without storing them in the structured format.

We use REST API to handle the client and the server connection

### Milestone 2: Login page

1.Created login page using Tailwind CSS and React.
2.Used routers


### Milestone 3: Project Setup for Backend

This milestone focused on setting up the backend server for the ecommerce application. Key achievements include:

Setting up a Node.js/Express server for the backend:
Initialized a new Node.js project using npm init.
Installed essential dependencies like express, dotenv, cors, and body-parser.
Created the folder structure for the backend, including directories for routes, controllers, and models.
Added environment variables for secure configuration using .env.
Configured the server to handle API requests and send appropriate responses.
Implemented basic routes to test the server functionality, such as:
A root endpoint (/) that returns a welcome message.
A /health endpoint to verify the server's status.
Ensured the server is ready for future integrations, including database and authentication modules.




### Milestone 4: Creating User Model and Controller

In this milestone, we focused on building and organizing the components necessary for user management and file uploads in our application. Below are the key steps and actions taken:

Folder Structure Setup:

Controllers Folder: Created a user.js file to handle the logic for user-related routes.
Models Folder: Created a user.js file to define the User schema.
Dependencies Installation:

Installed bcryptjs for password hashing to ensure secure storage of user credentials.
Installed multer to manage file uploads efficiently.
User Schema Creation:

In models/user.js, defined a User schema using Mongoose. The schema includes essential fields for user information, such as name, email, password, and other attributes.
Controller Implementation:

In controllers/user.js, implemented a route to handle user creation. This route integrates:
Password hashing using bcryptjs before saving user data.
Validation and error handling to ensure data integrity.
File Upload Management:

Created a multer.js file to configure file upload settings:
Configured storage options, including destination and filename customization.
Added logic to generate unique filenames for uploaded files.


### Milestone 5: Building a SignUp Page

In this Milestone, we created the sign up page

Here the input tag takes the input of the user to take inputs of
User's first name
Last Name
Email
Password
Confirm Password
We used react-router-dom and react-hook-form to do user validation. We also used regex and also watch to see whether both passwords match or not.
In the handlePic function, we created a URL for the image the user added.


### Milestone 6:Connect

In this milestone, we focused on securely handling user data, connecting the backend to the frontend, and managing user authentication. Below are the highlights of our progress:

Data Encryption:

Learned how to use bcrypt to encrypt user data, such as passwords, before saving them to the database.
Ensured sensitive information is securely stored, minimizing risks of data breaches.
Database Persistence:

Implemented functionality to store user data in the database reliably.
Ensured data consistency and prevented data loss during storage operations.
Backend-Frontend Integration:

Connected the frontend application to the backend, enabling seamless interaction between the two layers.
Configured endpoints to handle user profile uploads from the frontend.
Verified that user-uploaded profile images are correctly stored in the designated uploads folder on the server.
Authentication and Data Management:

Incorporated JSON Web Tokens (JWT) for managing user authentication and session handling.
Ensured secure and efficient user authentication by generating and verifying tokens for login sessions.

### Milestone 7: MongoDB connection
In this Milestone,

 Understand how to validate user credentials during login.
Learn how to compare the encrypted password with the user’s input.
The user provides their email/username and password on the login page.
The backend retrieves the user record based on the provided email/username.
If the user is not found, return an error: "User does not exist."
Process the user's input password using the same hashing algorithm (e.g., bcrypt).
Compare the resulting hash to the stored hashed password.
If they match, the user is authenticated; if not, send an error.


### Milestone 8: Home Page creation
In this Milestone,

Create a card component.
Display those cards on the products page.
A single card component that accepts product details as props.
Array mapping to iterate over the product list and render a card for each product.
Reusable card component with props for product details (e.g., name, image, price).
A grid layout or flexbox for displaying multiple cards neatly.
A home page with a route connecting to app.jsx.

### Milestone 9: Product Creation Page
In this milestone, we:

Learned to create a form to collect all product details.
Implemented functionality to upload multiple images as input.
Built the page using React JS and styled it with Tailwind CSS.
Utilized useState to manage form inputs dynamically.
Applied proper styling using Tailwind CSS for a responsive and modern UI.


### Milestone 10: Connecting to MongoDB

In this milestone, I accomplished the following:

Created a Product Schema using Mongoose

Defined a schema to structure product data
Included fields such as name, description, price, stock, category, and images
Built a POST Endpoint for Product Data

Developed an API endpoint to receive product details from the frontend
Implemented validation for required fields before storing data
Handled Image Uploads with Multer

Configured Multer to handle file uploads
Allowed users to upload up to ten images
Stored images in a dedicated Product folder for better organization
Integrated MongoDB for Persistent Storage

Connected the backend to MongoDB using Mongoose
Successfully stored validated product data, including image paths

### Milestone 11: Dynamic Product Card
In this milestone, we will:

Create an API Endpoint

Write a backend endpoint to extract and send product data from MongoDB.
Fetch Data on the Frontend

Receive product data in the frontend and dynamically display it using the existing Product card component.
Update Multer.js

Make necessary adjustments to Multer.js for handling product images properly.
Dynamically Display Products

Ensure that newly created products are dynamically added to the home page.
View Data on the Main Page

Verify that product data is properly displayed and accessible from the main page.

###      Milestone 12: Dynamic Filtering


In this Milestone,



To write an endpoint that will send data by filtering with my mail and send data from mongodb.

To receive data at frontend -How to display that data dynamically using product card created earlier.

The user can give their email, and the products from that email can be seen.

We create a new page myProducts to show the products of the user.

We update product.js in the backend to create,save and show the product.


### Milestone 13:
In this Milestone,

Write an endpoint that will update the existing data in MongoDB.
Auto fill the form with previous data and give option to edit.
We use router and post method.
The entire data and also part of data can be changed.
frontend we will add an edit button to the product card. When click on edit we will send the data to form and make it auto fill and have option to edit those data and save.


### Milestone 14:
In this Milestone,

Write an endpoint that delete the product with specific ID from MongoDB.
We use routers to delete the product
In frontend we will add an delete button to the product card.
When click on delete button we will send the product id to server endpoint.
After deleting the product will be removed from user's page.


### Milestone 15: Nav Bar
In this Milestone,

Creating and Nav component.
Reusing the same component in multiple pages.
Create an new Nav component with links to all pages:
Home
My-products
Add product
cart
Adding the nav component to all the pages and make the navigations to all this pages smooth and easy.
Making the Navbar responsive to all screen sizes.


### Milestone 16: New Product Page
In this Milestone,

Create an product info page that display all the product data and choose quantity and add to card button.
New page to display each product.
Adding quantity and add to card button.

### Milestone 17: Adding to the Products to the Cart


In this Milestone,

Creating a function to add the products to the Cart.


### Milestone 18: Creating the Backend endpoint

Create an Backend endpoint for the cart page. We will write the backend logic to fetch all the products inside user cart to display in cart page.

### Milestone 19: Cart Page

In this Milestone,

Create an cart page that display the products inside cart using endpoint that we used in the previous milestone.
Adding + and - buttons to increase or decrease the quantity of the products.
Also write an endpoint to increase and decrease the quantity.
Creating cart frontend page and display the products.
Using PUT method to update the data.

### Milestone 20: Profile Page
In this Milestone,

Create and backend endpoint that will send all the user data using mail.
Create an frontend profile page that will display all the user data.
Display profile photo, name, mail and addresses.

### Milestone 21: Address Page
In this Milestone,

Create an frontend form that will will take address.
Take country, city, address1, address2, zip code, address type
Create an state that will store input address
Create address form frontend page
when we click on add address in profile it should navigate to this form page.

### Milestone 22: Add Address
In this Milestone,

Create an endpoint that will receive the address from address form in frontend.
Add the address to the address array inside user collection.
Display the address in the Profile section.

### Milestone 23: Place Order

In this Milestone,

Add an button inside cart called "Place order".
Create an select address page where we will display all the address and ask to select delivery address.
Write mongoose schema for storing orders details.
Create an placeorder button inside cart page and navigate to select address page when clicked.
Create and select address page that will display all the available address and have an option to select one address.
Write an backend endpoint that will send all the addresses of the user.

### Milestone 24: Order Confirmation
In this Milestone,

Create an order conformation page.
Display all the products we are ordering.
Display the address user selected to deliver.
Display the total value of the cart.
Place order button at the bottom.

### Milestone 25: Place Order Backend
In this Milestone,

Create an endpoint that will receive the products, user, address details.
Get the mail of the user using that you need to retrive the _id of the user.
For each product the order will be different with same address.
Using order schema we created earlier we will store order details in mongodb order collection.
The page will finally lead to the success endpoint if Successfull.


### Milestone 26: Backend Endpoint
In this Milestone,

Create an endpoint that will receive the user mail.
Get the mail of the user using that you need to retrive the _id of the user.
Use the _id to get all the orders of that user.
Send all the users orders in the response.
Also do Error management.

### Milestone 27: My Orders page

In this Milestone,

Created an my-orders page
Send an get request to my-orders endpoint that we created in previous milestone.
We will send user mail in to endpoint to get all the user orders.
Display all the user orders.
We will add my-orders page in navbar for better navigation.

### Milestone 28: Cancel the placed orders
In this Milestone,

In my-orders page for every order add cancel order button.
If the order is already canceled this button should not be displayed.
Create an endpoint that will receive the order-id.
Get the order using this id and mark the status canceled and save.
We update the order.js controller to update the changes.

### Milestone 29: Payment
In this Milestone,

Using PayPal API in our program.
Integrating online payments.
Making sure it works without errors.


### Milestone 30: Pay Pal
In this Milestone,

Creating PayPal account and getting the UserID inside sandbox account.
Implementing online payment using PayPal API using the client key you created earlier.
Downloading NPM package called react-paypal-js that will provide an component called PayPalScriptProvider which will display online payment methods like credit or debit card.


### Milestone 31: Global State Management
In this Milestone,

Using redux for global state management.
Implementing redux store to store all global states.
Installing Redux and using it fro email in Signup and Login.


### Milestone 32: REDUX
In this Milestone,

Use redux to store the state and access in all the pages.
Use Dispatch method to store the mail inside global state.
Save the the mail stored in global state using useSelector.

### Milestone 33: COOKIE AND JWT
In this Milestone,

Create an JWT token.
Storing the tokens inside the cookie.
Adding the cookie inside the response.
