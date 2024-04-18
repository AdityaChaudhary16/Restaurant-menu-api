const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const menuData = require('./menuData');

// Construct a schema using GraphQL schema language
const schema = buildSchema(`
  type MenuItem {
    name: String!
    description: String!
    price: Float!
  }

  type MenuCategory {
    name: String!
    items: [MenuItem!]!
  }

  type Query {
    menu: [MenuCategory!]!
    menuItemsByCategory(category: String!): [MenuItem!]!
    menuItem(category: String!, name: String!): MenuItem
  }
`);

// The root provides the resolver functions for each API endpoint
const root = {
  menu: () => {
    const categories = Object.keys(menuData);
    return categories.map(category => ({
      name: category,
      items: menuData[category]
    }));
  },
  menuItemsByCategory: ({ category }) => {
    const items = menuData[category];
    if (!items) {
      throw new Error(`Category '${category}' not found.`);
    }
    return items;
  },
  menuItem: ({ category, name }) => {
    const menuSection = menuData[category];
    if (!menuSection) return null;
    const menuItem = menuSection.find(item => item.name.toLowerCase() === name.toLowerCase());
    return menuItem || null;
  }
};

const app = express();

// Set up the GraphQL endpoint
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true, // Enable GraphiQL interface for easy testing
}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
