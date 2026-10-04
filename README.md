# GenWeb.ai — AI-Powered Website Builder

Build, customize, and preview websites using the power of AI.

**GenWeb.ai** is an AI-powered website builder that transforms natural-language prompts into website code. It provides an interactive development environment where users can generate websites, edit code, preview changes in real time, and manage their projects.

## Live Demo

[**Explore GenWeb.ai**](https://aiwebsitebuilder-1-t68i.onrender.com)

## Features

- **AI Website Generation:** Generate website code using natural-language prompts.
- **AI-Powered Editing:** Modify and refine generated websites through AI prompts.
- **Live Preview:** Instantly view generated websites using an embedded preview.
- **Monaco Code Editor:** Edit generated code in an interactive code editor.
- **User Authentication:** Secure authentication and session management.
- **Project Management:** Save and manage generated website projects.
- **Credit-Based Usage:** Manage AI generation through a credit-based system.
- **Payment Integration:** Stripe integration for payment-related functionality.
- **Responsive Interface:** Modern user interface built with React and Tailwind CSS.
- **Public Website Deployment:** Support for publishing generated websites through accessible URLs.

## Tech Stack

### Frontend
- React.js 19
- Vite
- Redux Toolkit
- React Router
- Tailwind CSS
- Axios
- Monaco Editor
- Firebase

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- Cookie-based authentication
- CORS
- dotenv

### AI & Integrations
- OpenRouter API
- DeepSeek Chat
- Stripe

## Architecture

```text
GenWeb.ai
│
├── Client
│   ├── React + Vite
│   ├── Redux Toolkit
│   ├── React Router
│   ├── Tailwind CSS
│   ├── Monaco Editor
│   └── Live Preview (iframe)
│
├── Server
│   ├── Node.js
│   ├── Express.js
│   ├── REST APIs
│   ├── JWT Authentication
│   ├── AI Prompt Processing
│   └── Stripe Integration
│
├── Database
│   └── MongoDB
│
└── AI Provider
    └── OpenRouter → DeepSeek Chat
```

## How It Works

1. A user enters a prompt describing the website they want to build.
2. The frontend sends the prompt to the backend through REST APIs.
3. The backend processes the request and communicates with the AI model.
4. The AI generates the required website code.
5. The generated code is displayed in the Monaco Editor.
6. The website is rendered inside an iframe for live preview.
7. Users can refine the website through additional prompts and save their projects.

## Project Structure

```text
GenWeb.ai/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── services/
│   │   └── App.jsx
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── package.json
│   └── server.js
│
└── README.md
```

*Note: The directory structure above is illustrative; adjust it to match the actual repository.*

## Getting Started

### Prerequisites

Make sure you have installed:

- Node.js (v20 or later recommended)
- npm
- MongoDB
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/GenWeb.ai.git
cd GenWeb.ai
```

### 2. Install Dependencies

For the backend:

```bash
cd server
npm install
```

For the frontend:

```bash
cd ../client
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the server directory and configure the required environment variables.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
OPENROUTER_API_KEY=your_openrouter_api_key
STRIPE_SECRET_KEY=your_stripe_secret_key
CLIENT_URL=http://localhost:5173
```

Add any additional environment variables required by your implementation. Never commit real API keys, database credentials, or secrets.

### 4. Run the Application

Start the backend:

```bash
cd server
npm run dev
```

Start the frontend in another terminal:

```bash
cd client
npm run dev
```

Open the local URL displayed by Vite, usually:

```text
http://localhost:5173
```

## Key Learning Outcomes

Developing GenWeb.ai provided practical experience in:

- Full-stack application development using the MERN stack.
- Integrating LLM APIs into real-world applications.
- Designing RESTful APIs and backend services.
- Implementing authentication and authorization.
- Managing application state using Redux Toolkit.
- Building interactive code-editing environments.
- Implementing real-time website preview functionality.
- Integrating payment services and credit-based systems.
- Deploying and maintaining full-stack applications.

## Future Improvements

- Support for additional AI models.
- More website templates and customization options.
- Advanced code generation and debugging.
- One-click deployment for generated websites.
- Collaborative website editing.
- Enhanced AI context management.
- Improved responsive design generation.

## Author

**Ankit Verma**

B.Tech Computer Science and Engineering

GitHub: [Ankit9997verma](https://github.com/Ankit9997verma)

## Acknowledgements

- OpenRouter for AI model access.
- DeepSeek for AI-powered code generation.
- Open-source technologies and libraries used in this project.

---

⭐ If you find GenWeb.ai interesting, consider giving the repository a star!
