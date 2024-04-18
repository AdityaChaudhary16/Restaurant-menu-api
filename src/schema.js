const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type MenuItemOption {
    name: String!
    price: Float!
  }

  type MenuItem {
    name: String!
    description: String
    price: Float!
    options: [MenuItemOption]
  }

  type Query {
    getMenuItems(category: String!): [MenuItem]
  }
`;

module.exports = typeDefs;
