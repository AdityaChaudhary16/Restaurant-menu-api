### **Restaurant Menu API**

This is a GraphQL API for managing a restaurant menu. It provides endpoints to fetch menu items based on categories and names.

**Features**

- Fetch all menu categories and their respective items.
- Retrieve details of a specific menu item by providing its category and name.

**Technologies Used**

- Node.js
- Express.js
- GraphQL
- JavaScript

**Getting Started**

Prerequisites

- Node.js installed on your machine
- Postman (for testing API endpoints)

Installation

1. Clone this repository to your local machine:
git clone <repository-url>

2. Navigate to the project directory:
cd restaurant-menu-api

3. Install dependencies:
npm install

4. Start the server:
node app.js

**Usage**
Once the server is running, you can access the GraphQL endpoint:
http://localhost:3000/graphql

**Query Examples**
1. Fetch all menu categories and items:
```
query {
  menu {
    name
    items {
      name
      description
      price
    }
  }
}

```

2. Retrieve details of a specific menu item:
```
query {
  menuItem(category: "appetizers", name: "Kale Salad") {
    name
    description
    price
  }
}

```

**Using Postman**

1. Set up a new request in Postman with the following details:

- Request Type: POST
- URL: http://localhost:3000/graphql
- Headers: Add a header with key Content-Type and value application/json
- Body: Select raw and choose JSON as the format

2. Send GraphQL queries in the request body. For example:
```
{
  "query": "{ menu { name items { name description price } } }"
}

```

```
{
  "query": "{ menuItem(category: \"appetizers\", name: \"Kale Salad\") { name description price } }"
}
```

**Testing**

To run the tests, use the following command:
```
npm test
```