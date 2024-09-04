# 🌐 URL Shortener Service

A full-stack URL shortener service built using Node.js, TypeScript, Express, MongoDB for the backend, and React with Vite for the frontend. This project allows users to shorten long URLs, track clicks, and manage their shortened URLs efficiently and in real-time.

<!-- ![URL Shortener Service](https://user-images.githubusercontent.com/your-image-url) -->

## 🚀 Features

- **Shorten URLs**: Convert long URLs into concise, easy-to-share links.
- **Track Clicks**: Monitor the number of clicks on each shortened URL.
- **Real-time Updates**: The application updates state changes immediately without needing to refresh the page.
- **User-friendly Interface**: Simple and clean UI built with React and Tailwind CSS for seamless interaction.
- **Secure**: Built with modern web security practices.

## 🛠️ Tech Stack

### Backend
- **Node.js**
- **Express**
- **TypeScript**
- **MongoDB**
- **Mongoose**
  
### Frontend
- **React** (with React Router)
- **Vite** (for blazing-fast development)
- **Tailwind CSS** (for styling)
- **Axios** (for API requests)

### Development Tools
- **Nodemon**
- **TypeScript**
- **ESLint**
- **Vite**
- **Dotenv**

## 📚 Installation and Setup

### Backend

1. **Clone the repository**:
   ```bash
   git clone https://github.com/askhan963/url-shortener-mern.git
   ```

2. **Navigate into the project directory**:
   ```bash
   cd server
   ```

3. **Install the backend dependencies**:
   ```bash
   npm install
   ```

4. **Create a `.env` file** in the root directory and add your MongoDB URI and other environment variables:
   ```plaintext
   MONGO_URI=mongodb://localhost:27017/yourdbname
   PORT=3000
   ```

5. **Run the backend development server**:
   ```bash
   npm run dev
   ```

### Frontend

1. **Navigate to the `client` directory**:
   ```bash
   cd client
   ```

2. **Install the frontend dependencies**:
   ```bash
   npm install
   ```

3. **Run the frontend development server**:
   ```bash
   npm run dev
   ```

### Build and Deploy

To build the project for production:

1. **Build the backend**:
   ```bash
   npm run build
   ```

2. **Build the frontend**:
   ```bash
   cd client
   npm run build
   ```

3. **Start the production server**:
   ```bash
   npm start
   ```

## 🖥️ Usage

- **Shorten a URL**: On the main page, paste your long URL, and click "Shorten". A unique short URL will be generated and displayed.
- **Manage URLs**: View all your shortened URLs in a table with options to copy, delete, or visit them.
- **Track Clicks**: Each time someone clicks on the shortened URL, the click count is updated in real-time.

## 🧩 Project Structure

```plaintext
├── server
│   ├── src
│   │   ├── controllers     # Express controllers for handling requests
│   │   ├── models          # Mongoose models for MongoDB schemas
│   │   ├── routes          # Express routes
│   │   ├── middlewares     # Custom middlewares
│   │   ├── utils           # Utility functions
│   │   └── index.ts        # Entry point of the application
│   └── dist                # Compiled JavaScript files
│
├── client
│   ├── src
│   │   ├── components      # Reusable React components
│   │   ├── pages           # Application pages
│   │   ├── App.tsx         # Main React component
│   │   └── main.tsx        # Vite entry point
│   └── public              # Static files
│
├── .env                    # Environment variables
├── package.json            # Project metadata and dependencies (backend)
├── tsconfig.json           # TypeScript configuration (backend)
└── client
    ├── package.json        # Project metadata and dependencies (frontend)
    └── tsconfig.json       # TypeScript configuration (frontend)
```

## 🛡️ Security Considerations

- **CORS**: Properly configured to allow requests only from trusted origins.
- **Environment Variables**: Sensitive data like database URIs are stored in environment variables.
- **Error Handling**: Centralized error handling to catch and manage errors efficiently.

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.
<!-- 
## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. -->

## 🌟 Acknowledgements

- Thanks to the amazing [Mongoose](https://mongoosejs.com/), [Express](https://expressjs.com/), and [React](https://reactjs.org/) communities for their invaluable resources and support.
- Inspired by popular URL shortening services.

