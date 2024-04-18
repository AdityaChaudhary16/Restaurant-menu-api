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











//const { buildSchema } = require('graphql');
//
//const schema = buildSchema(`
//  type MenuItem {
//    name: String!
//    description: String!
//    price: Float!
//    subcategory: String
//    options: [Option]
//  }
//
//  type Option {
//    name: String!
//    price: Float!
//  }
//
//  type MenuCategory {
//    category: String!
//    items: [MenuItem!]!
//  }
//
//  type Query {
//    menu: [MenuCategory!]!
//    menuItemByName(category: String!, name: String!): MenuItem
//    menuItemsByCategory(category: String!): [MenuItem!]!
//  }
//`);
//
//module.exports = schema;
