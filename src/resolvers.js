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





//const resolvers = {
//  Query: {
//    menu: () => {
//      return Object.keys(menuData).map(category => ({
//        category,
//        items: menuData[category].map(item => {
//          if (item.options && item.options.length > 0) {
//            // If options exist, return an array of objects with name and price
//            return {
//              name: item.name,
//              description: item.description,
//              price: item.options.map(option => option.price)
//            };
//          } else {
//            // Otherwise, return the item with its price
//            return {
//              name: item.name,
//              description: item.description,
//              price: item.price
//            };
//          }
//        })
//      }));
//    },
//    menuItemByName: (parent, args) => {
//      const { category, name } = args;
//      const menuSection = menuData[category];
//      if (!menuSection) return null;
//      const menuItem = menuSection.find(item => item.name.toLowerCase() === name.toLowerCase());
//      if (!menuItem) return null;
//      if (menuItem.options && menuItem.options.length > 0) {
//        // If options exist, return the item with options
//        return {
//          name: menuItem.name,
//          description: menuItem.description,
//          price: menuItem.options.map(option => option.price)
//        };
//      } else {
//        // Otherwise, return the item with its price
//        return {
//          name: menuItem.name,
//          description: menuItem.description,
//          price: menuItem.price
//        };
//      }
//    },
//    menuItemsByCategory: (parent, args) => {
//      const { category } = args;
//      return menuData[category] || [];
//    },
//  },
//};
//
//module.exports = resolvers;
