# GS7 Shopify - React E-Commerce Application

GS7 Shopify is a beginner-friendly e-commerce application built with **React** and **Vite**. It demonstrates how to build a modern, responsive online store with key features like product listing, product details, and navigation.


🌐 **Live Demo of Our Project**: [https://gs-7-shopify-rust.vercel.app/](https://gs-7-shopify-rust.vercel.app/)

---



## 🚀 Features

- **Product Listing** – Displays a grid of products fetched from the [Fake Store API](https://fakestoreapi.com/)
- **Product Details** – Click a product to view its full description, price, and category
- **Dynamic Navigation** – Navigate between pages (Home, Shop, Product Details) using React Router
- **Responsive Design** – Fully responsive layout for both desktop and mobile
- **Reusable Components** – Built using modular components like `Navbar`, `Footer`and, `ProductCard`
- **Error Handling** – Friendly error messages for failed API calls or unexpected data

---

## 🛠 Technologies Used

- **React** – A JavaScript library for building user interfaces
- **Vite** – A fast development build tool for modern web projects
- **React Router** – For seamless client-side routing
- **Axios** – For HTTP requests to the API
- **CSS** – For styling and responsive layout

---

## 📄 Pages & Components Overview

### 1. **Home Page**
- **Purpose**: Welcomes users and showcases featured products
- **Key Features**:
  - Introductory header
  - Grid of featured products from the API

### 2. **Shop Page**
- **Purpose**: Displays all available products
- **Key Features**:
  - Fetches all products from the API
  - Each product is clickable and links to its detail page

### 3. **Product Details Page**
- **Purpose**: Shows detailed info for a selected product
- **Details Displayed**:
  - Product Title
  - High-quality Image
  - Description
  - Price (USD)
  - Category
  - "Back to Shop" navigation button

### 4. **Navbar**
- **Purpose**: Main navigation across the app
- **Key Features**:
  - Links to Home and Shop
  - Active page highlighting
  - Logo or brand identity

### 5. **Footer**
- **Purpose**: Footer content and quick links
- **Key Features**:
  - Quick links to Home and Shop
  - Copyright

---

## 🧑‍💻 How to Run the Project

Follow these steps to run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/gs7-shopify-react.git
cd gs7-shopify-react
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

### 4. Open the App in Your Browser

Visit: [http://localhost:5173](http://localhost:5173)

---

## 🔗 API Used

This app fetches product data from the [Fake Store API](https://fakestoreapi.com/). The API provides data including:

- Product Title
- Description
- Price
- Category
- Product Image

---

## 🗂 Folder Structure

```
src/
├── components/          
│   ├── Footer.jsx       
│   ├── NavBar.jsx       
│   ├── ProductCard.jsx  
├── pages/               
│   ├── Home.jsx         
│   ├── Shop.jsx         
│   └── ProductDetails.jsx
├── App.jsx              
├── index.css            
└── main.jsx             
```

---

## 🌱 Future Enhancements

- Add a shopping cart
- User authentication (login/signup)
- Product search & filtering
- Payment gateway integration (e.g., Stripe)

---

## 📘 Beginner-Friendly Notes

### Why React?
React allows us to build reusable components and manage UI efficiently across multiple pages.

### What is Vite?
Vite is a fast build tool and development server. It replaces older tools like Create React App with better performance.

### What is React Router?
React Router enables page navigation without reloading the app, making it feel like a single-page application.

### What is Axios?
Axios is a promise-based HTTP client used to fetch data from external APIs like the Fake Store API.

---

## 📄 License

This project is intended for **educational purposes only** and is not production-ready.

---

## 🎉 Happy Coding!

### Key Additions for Beginners:
1. **Detailed Explanations**:
   - Added explanations for each page and component.
   - Explained the purpose and key features of each part of the app.

2. **Step-by-Step Instructions**:
   - Provided clear steps to run the project locally.

3. **Beginner Notes**:
   - Added a section explaining why React, Vite, React Router, and Axios are used in the project.

4. **Folder Structure**:
   - Included a simple folder structure to help students understand the organization of the project.

This version of the [README.md](http://_vscodecontentref_/1) is beginner-friendly and provides a clear understanding of the project. Let me know if you need further clarification or additional edits!


