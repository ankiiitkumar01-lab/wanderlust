# 🌍 Wanderlust - Travel Listing Platform

A full-stack web application inspired by Airbnb where users can explore, create, review, and manage travel listings. The platform provides secure authentication, authorization, image uploads, reviews, and a seamless user experience with proper error handling and flash messages.
  ## 🌐 Live Demo

🔗 **Live Website:** https://wanderlust-m4g9.onrender.com/listings

Experience the application by browsing listings, creating an account, posting reviews, and managing your own listings.
## 🚀 Features

### 🏠 Listings

* Browse multiple travel listings on the homepage.
* Each listing displays:

  * Property image
  * Title
  * Price
  * Location
  * Short description
* Click any listing to view complete details.

### 📄 Listing Details

* Full property description.
* Large property image.
* Pricing and location information.
* User reviews and ratings.

### 👤 Authentication

* User Signup.
* User Login.
* User Logout.
* Password security using authentication middleware.

### 🔐 Authorization

* Only the owner of a listing can:

  * Edit listing
  * Delete listing
* Only the author of a review can:

  * Delete their review
* Unauthorized users cannot modify protected resources.

### ⭐ Reviews & Ratings

* Add reviews to listings.
* Give ratings.
* View reviews from other users.
* Delete own reviews.

### 💬 Flash Messages

* Welcome messages.
* Listing created successfully.
* Listing updated successfully.
* Listing deleted successfully.
* Login and logout notifications.
* Error messages for invalid actions.

### ⚠️ Error Handling

* Custom error handling middleware.
* Handles invalid routes.
* Handles database and server errors gracefully.
* User-friendly error pages.

### 📱 Responsive Design

* Mobile-friendly interface.
* Clean and modern UI.
* Responsive navigation bar.

---

## 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3
* Bootstrap 5
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication

* Passport.js
* Passport Local Strategy
* Express Session

### Additional Packages

* EJS
* Method Override
* Connect Flash
* Joi Validation
* Multer
* Cloudinary

---

## 📂 Main Functionalities

1. User Registration & Login
2. Create New Listings
3. View Listing Details
4. Edit/Delete Own Listings
5. Add Reviews & Ratings
6. Delete Own Reviews
7. Flash Messages & Notifications
8. Secure Authentication & Authorization
9. Robust Error Handling

---

## 📸 Screenshots

### Home Page

Displays all travel listings with images and brief information.

### Listing Details Page

Shows complete property details, ratings, and reviews.

### Authentication Pages

Secure login and signup system.

---

## 🚀 Installation

```bash
git clone https://github.com/ankiiitkumar01-lab/wanderlust

cd wanderlust

npm install

npm start
```

Open your browser and visit:

```bash
http://localhost:3000
```

---

## 🎯 Future Improvements

* Wishlist Feature
* Booking System
* Search & Filters
* Map Integration
* User Profile Dashboard
* Payment Gateway

---

## 👨‍💻 Author

Ankit Kumar

Built as a full-stack web development project to practice authentication, authorization, CRUD operations, database management, and responsive UI development.
