

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.

# Typescript Oninon Example

This is a server-side API application built with TypeScript and Express.

# Onion Architecture in TypeScript

This project demonstrates how to implement the Onion Architecture in TypeScript using Node.js and Express. The Onion Architecture is a software architecture pattern that promotes the separation of concerns and the independence of layers in a system.

## Architecture Layers

The Onion Architecture consists of four layers, which are arranged in concentric circles:

### Domain Layer
This layer represents the core business logic of the application. It contains entities, value objects, and domain services that encapsulate the business rules and logic of the system.

### Application Layer
This layer is responsible for implementing the use cases of the system. It contains application services that orchestrate the domain objects to perform specific tasks.

### Infrastructure Layer
This layer provides the technical infrastructure and support for the application. It contains adapters and drivers that interact with external systems and services, such as databases, message queues, and external APIs.

### Presentation Layer
This layer is responsible for presenting the application's data and functionality to users. It contains user interfaces, such as web or mobile interfaces, that enable users to interact with the system.

## Disclaimer

Please note that this is just a reference project and is not intended to be used as a production-ready application. It lacks important features like proper logging, error handling, and other requirements that are necessary for a real-world application. This project should be used as a starting point or reference for learning purposes only.

## Installation

To install the dependencies, run:

```
npm install
```

## Usage

To start the application, run:

```
npm start
```

This will start the server on port 3000.

## Building the Application

To build the application, run:

```
npm run build
```

This will transpile the TypeScript code to JavaScript and bundle it into a single file in the `dist` folder.

## Testing

To run the unit tests, run:

```
npm test
```

This will run the Jest test runner and output the results in the console.

## API Endpoints

The following endpoints are available in the API:

### GET /users

This endpoint retrieves a list of all users.

Example request:

```
GET http://localhost:3000/users
```

Example response:

```
[
  {
    "id": 1,
    "name": "John",
    "email": "john@example.com"
  },
  {
    "id": 2,
    "name": "Jane",
    "email": "jane@example.com"
  }
]
```

### GET /users/:id

This endpoint retrieves a single user by ID.

Example request:

```
GET http://localhost:3000/users/1
```

Example response:

```
{
  "id": 1,
  "name": "John",
  "email": "john@example.com"
}
```

### POST /users

This endpoint creates a new user.

Example request:

```
POST http://localhost:3000/users

{
  "name": "Bob",
  "email": "bob@example.com"
}
```

Example response:

```
{
  "id": 3,
  "name": "Bob",
  "email": "bob@example.com"
}
```

### PUT /users/:id

This endpoint updates an existing user by ID.

Example request:

```
PUT http://localhost:3000/users/3

{
  "name": "Bobby",
  "email": "bobby@example.com"
}
```

Example response:

```
{
  "id": 3,
  "name": "Bobby",
  "email": "bobby@example.com"
}
```

### DELETE /users/:id

This endpoint deletes a user by ID.

Example request:

```
DELETE http://localhost:3000/users/3
```

Example response:

```
{
  "message": "User with ID 3 has been deleted."
}
```

## API Testing

To test the API, you can use the `.src/__tests__/api_test.py` file. This file contains Python code that makes HTTP requests to the API endpoints and verifies the responses. To use it, simply start the Node.js application with `npm start`, and then run the Python script with:

```
python api_test.py
```

This will run the tests and output the results in the console.