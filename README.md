# Studio Ghibli Directors & Films

A Node.js web application that displays information about Studio Ghibli films and directors using the [Ghibli API](https://ghibliapi.dev/).

## Features

- Browse Studio Ghibli films
- View director information
- Responsive web interface built with Pug templates
- Data fetched from the official Ghibli API

## Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 12 or higher recommended)
- npm (comes with Node.js)

## Installation

1. Clone or download this repository to your local machine

2. Navigate to the project directory:

   ```bash
   cd directorsGhibli
   ```

## Running the Application

1. Start the server:

   ```bash
   node index.js
   ```

2. Open your web browser and navigate to:

   ```
   http://localhost:3000/films
   ```

3. The application will be running on port 3000 by default. You can access:
   - Films: `http://localhost:3000/films`
   - Directors: `http://localhost:3000/directors`

## Configuration

To change the port, set the `PORT` environment variable before starting the application:

**Windows (Command Prompt):**

```bash
set PORT=8080 && node index.js
```

**Windows (PowerShell):**

```bash
$env:PORT=8080; node index.js
```

**macOS/Linux:**

```bash
PORT=8080 node index.js
```

## Project Structure

```
directorsGhibli/
├── app_server/
│   ├── controllers/     # Request handlers
│   ├── models/          # Data models and API calls
│   ├── routes/          # Route definitions
│   └── views/           # Pug templates
├── public/              # Static files (CSS, images)
├── index.js             # Application entry point
└── package.json         # Project dependencies
```

## Dependencies

- **express**: Web framework for Node.js
- **axios**: HTTP client for API requests
- **pug**: Template engine
- **debug**: Debugging utility

## API

This application uses the [Ghibli API](https://ghibliapi.dev/) to fetch information about Studio Ghibli films and directors.

## Troubleshooting

If you encounter any issues:

1. Make sure all dependencies are installed: `npm install`
2. Check that port 3000 is not already in use
3. Verify your internet connection (required to fetch data from the Ghibli API)

## License

ISC
