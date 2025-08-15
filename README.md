# MERN Stack URL Shortener

This is a simple web application built with the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to submit a long URL and receive a shortened version, which redirects to the original URL upon visit.

## ✨ Features

-   **URL Shortening:** Enter a long URL to generate a unique, short code.
-   **Redirection:** Visiting the shortened URL redirects to the original destination.
-   **Click Tracking:** The backend tracks the number of times each short URL is visited.
-   **Responsive Design:** A clean, modern, and responsive user interface with an animated gradient background.

## 🚀 Tech Stack

-   **Frontend:** React.js
-   **Backend:** Node.js, Express.js
-   **Database:** MongoDB (with Mongoose)
-   **Deployment:** (Local)

## 🛠️ How to Run Locally

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/Ravi6250/url-shortener-mern.git
    cd url-shortener-mern
    ```

2.  **Setup & Start the Backend Server:**
    *(Make sure your MongoDB service is running)*
    ```sh
    cd backend
    npm install
    npm start
    ```

3.  **Setup & Start the Frontend App (in a new terminal):**
    ```sh
    cd frontend
    npm install
    npm start
    ```
    The application will be available at `http://localhost:3000`.