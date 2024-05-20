# 🗨️ ChatNest-WebSockets

Welcome to **ChatNest-WebSockets**, a simple and fun real-time chat application built with NestJS and WebSockets! Connect with friends, see who's online, and chat instantly. 🚀

![image](https://github.com/YeffersonSilva/ChatNest-WebSockets/assets/117882117/ab160c27-e6ce-4398-8de9-a5c08aab9271)

## 🌟 Features

- 🔥 Real-time messaging using WebSockets
- 💡 Display online/offline status
- 👥 Show connected users
- 🎨 Dynamic and interactive user interface

## 🚀 Getting Started

### Prerequisites

Before you begin, make sure you have:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (version 6 or higher)

### Installation

**Clone the repository:**

   ```bash
   git clone https://github.com/YeffersonSilva/ChatNest-WebSockets.git
   cd ChatNest-WebSockets
```
**Install dependencies:**
```bash
  npm install
```
**Start the NestJS server:**
```bash
npm run start:dev
```

## 📝 Usage

1. Enter your username when prompted.
2. Start chatting! See other connected users and their messages in real-time.

### Example Conversation

**Hulk:** Hulk smash!

**Tony Stark:** Why smash?

**Hulk:** Smash bad guys.

**Tony Stark:** Good plan.

## 🏗️ Project Structure

Here's a quick overview of the project's structure:

- **`src/`**: Contains the NestJS server code.
  - **`app.module.ts`**: Main module of the application.
  - **`chat/`**: Contains chat-related modules, services, and gateways.
    - **`chat.module.ts`**: Chat module.
    - **`chat.gateway.ts`**: WebSocket gateway for chat functionality.
    - **`chat.service.ts`**: Service for managing chat logic.

- **`public/`**: Contains static files served by the application.
  - **`index.html`**: Main HTML file for the chat application.
  - **`css/`**: Contains styles for the application.
  - **`js/`**: Contains client-side JavaScript for the application.

## 💻 Client-side Code

The client-side code handles the user interface and communication with the server using WebSockets. Key features include:

- **Updating the list of connected users**
- **Displaying messages in real-time**
- **Showing online/offline status**
