const resolvers = require('../src/resolvers');
const menuData = require('../src/menuData');

describe('Resolvers', () => {
  describe('menuItemsByCategory', () => {
    it('should return menu items for a valid category', () => {
      const category = 'appetizers';
      const expectedResult = menuData[category];
      const result = resolvers.Query.menuItemsByCategory(null, { category });
      expect(result).toEqual(expectedResult);
    });

    it('should throw an error for an invalid category', () => {
      const category = 'invalid_category';
      expect(() => resolvers.Query.menuItemsByCategory(null, { category })).toThrow(`Category '${category}' not found.`);
    });
  });

  describe('getAllMenuItems', () => {
    it('should return all menu items', () => {
      const expectedResult = Object.values(menuData).flat();
      const result = resolvers.Query.getAllMenuItems();
      expect(result).toEqual(expectedResult);
    });
  });
});
