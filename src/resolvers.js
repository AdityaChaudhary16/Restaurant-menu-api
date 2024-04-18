const menuData = require('./menuData');

const resolvers = {
  Query: {
    menuItemsByCategory: (_, { category }) => {
      try {
        const items = menuData[category];
        if (!items) {
          throw new Error(`Category '${category}' not found.`);
        }
        return items;
      } catch (error) {
        throw new Error(`Failed to retrieve menu items: ${error.message}`);
      }
    },
    getAllMenuItems: () => {
      try {
        // Combine all menu items from all categories
        const allItems = Object.values(menuData).flat();
        return allItems;
      } catch (error) {
        throw new Error(`Failed to retrieve all menu items: ${error.message}`);
      }
    },
  },
};

module.exports = resolvers;
