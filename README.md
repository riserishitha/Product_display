# ERA 
## 🎯 Objective
This project is a frontend-focused web application built using React.js. It showcases products with detailed information, allows users to add items to their cart, and includes user authentication and a web-based barcode scanner for added functionality.

## ⚙️ Tech Stack

### Frontend: React.js, Tailwind CSS, React Icons

### State Management: React Context API

### Authentication: Mock authentication with login redirect

### Barcode Scanner: QuaggaJS for scanning product barcodes

### UI Libraries: Tailwind CSS for consistent styling

## 🚀 Features
###  1. Product List Page

Displays multiple products with images, names, brands, and prices.

Responsive design for both desktop and mobile views.

Each product includes an "Add to Bag" button.

### 2. Product Detail View (Modal)
Clicking on a product opens a modal with:

Image, Name, Brand, and Price on the left.

Description and Customer Reviews on the right.

"Add to Bag" button to add the product to the cart.

### 3. Shopping Cart (My Bag)
Displays products added to the cart.

Shows individual prices, total price, and allows quantity adjustments.

Option to remove items from the cart.

### 4. User Authentication
Mock authentication with:

Login redirect if the user is not authenticated.

"Please log in or sign up" alert with a redirect timeout.

### 5. Barcode Scanner
Integrated QuaggaJS library for web-based barcode scanning.

Automatically adds the scanned product to the cart.

## 🛠️ Installation and Setup

1️⃣ Clone the Repository
```sh
git clone <repository_url>
cd product-showcase
```
2️⃣ Install Dependencies
```sh
npm install
```
3️⃣ Run the Application
```sh
npm run dev
```
## 1. Authentication Flow
If you are not authenticated, attempting to add products will trigger a login redirect.

After authentication, you can add products to the cart.

## 2. Barcode Scanner
Use the web-based barcode scanner to scan product barcodes.

Scanned products are automatically added to the cart.

## 🎖️ Design Choices
### Grid Layout for Product Display:

Optimized the modal layout with a grid to display the image, name, and price on one side, and the description and reviews on the other side.

### Responsive UI:

Used Tailwind CSS to ensure the app is fully responsive on both desktop and mobile devices.

### Smooth Transitions:

Added hover and transition effects for a better user experience.

## 🚧 Challenges Faced
### State Management:

Using useContext for state management simplified handling cart items globally without requiring Redux.

### Barcode Scanner Integration:

Ensuring the scanner works seamlessly across different devices and browsers required testing and fine-tuning.

## Deployed Link :
**https://jovial-granita-a62975.netlify.app/**
