# Sandesh App

Sandesh App is a messaging application that allows users to send and receive messages in real-time. This README file provides an overview of the project, how to set it up, and how to contribute.

## Features

- Real-time messaging
- User authentication
- Group chats
- image sharing 
- Notifications

## Installation

To get started with the Sandesh App, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/AdityaBhimwal/Sandesh.git
    cd Sandesh_app
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root directory and add the following variables:

        ```plaintext
        MONGODB_URI=your_mongodb_uri
        PORT=your_port
        JWT_SECRET=your_jwt_secret
        CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
        CLOUDINARY_API_KEY=your_cloudinary_api_key
        CLOUDINARY_API_SECRET=your_cloudinary_api_secret
        NODE_ENV=your_node_env
        ```

4. **Run the application:**

    ```bash
    npm start
    ```

## Summary
The Sandesh App is a comprehensive messaging platform that supports real-time communication, user authentication, group chats, image sharing, and notifications. It is built with a focus on ease of use and scalability. The installation process involves cloning the repository, installing dependencies, setting up environment variables, and running the application. This README provides all the necessary steps to get the app up and running quickly.