import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS for styling
import "./styles/App.css"; // Ensure this file exists

// Importing pages and components
import App from "./App";
import Home from "./pages/Home"; // Make sure this matches the filename
import AboutMe from "./pages/AboutMe"; // Adjusted to match your file
import Contact from "./pages/Contact"; // Adjusted to match your file
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
// Define the accessible routes

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />, // This should match Home.jsx
      },
      {
        path: "about",
        element: <AboutMe />, // This should match AboutMe.jsx
      },
      {
        path: "contact",
        element: <Contact />, // This should match Contact.jsx
      },
      {
        path: "portfolio",
        element: <Portfolio />, // Portfolio component
      },
      {
        path: "resume",
        element: <Resume />, // Resume component
      },
    ],
  },
]);

// Render the RouterProvider component with the router setup
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
