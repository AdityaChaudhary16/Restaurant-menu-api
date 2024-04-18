const menuData = {
  appetizers: [
    {
      name: "Iceberg Wedge Salad with House Cured Bacon",
      description: "Tomato salsa gorgonzola",
      price: 7.50
    },
    {
      name: "Sautéed Shredded Brussels Sprouts",
      description: "Bacon hazelnuts gorgonzola",
      price: 6.95
    },
    {
      name: "Kale Salad",
      description: "Parmesan crisp corn radish garlic-lemon vinaigrette",
      price: 7.50
    },
    {
      name: "Pecan Crusted Utah Goat Cheese with Basil-Mint Pesto",
      description: "Grilled tomato salsa crostini",
      price: 6.95
    },
    {
      name: "Chicken and Cabbage Eggrolls",
      description: "Hot & sour dipping sauce",
      price: 6.95
    }
  ],
  entrees: [
    {
      name: "Farfalle Pasta with Braised Pork in Tomato Cream",
      description: "Capers butternut squash kale",
      price: 12.95
    },
    {
      name: "Stout Braised Bratwurst",
      description: "Horseradish mashed potatoes roasted root veggies grilled onion",
      price: 13.95
    },
    {
      name: "Salmon & Crispy Tofu in Yellow Curry Sauce",
      description: "Vegetable sauté golden raisin chutney",
      price: 15.95
    },
    {
      name: "Sesame Shrimp",
      description: "Udon noodles ramen broth shiitake mushrooms bean sprouts scallions",
      price: 13.95
    }
  ],
  sandwiches: [
    {
      name: "Turkey & Avocado - Half",
      description: "With tomato",
      price: 7.95,
      subcategory: "cold"
    },
    {
      name: "Turkey & Avocado - Full",
      description: "With tomato",
      price: 9.25,
      subcategory: "cold"
    },
    {
      name: "Pub Club - Half",
      description: "Turkey, bacon. lettuce, tomato",
      price: 7.95,
      subcategory: "cold"
    },
    {
      name: "Pub Club - Full",
      description: "Turkey, bacon. lettuce, tomato",
      price: 9.25,
      subcategory: "cold"
    },
    {
      name: "Rare Roast Beef & Swiss - Half",
      description: "Sweet-hot mustard, lettuce, red onion",
      price: 7.95,
      subcategory: "cold"
    },
    {
      name: "Rare Roast Beef & Swiss - Full",
      description: "Sweet-hot mustard, lettuce, red onion",
      price: 9.25,
      subcategory: "cold"
    },
    {
      name: "Veggie - Half",
      description: "Pepper jack, avocado, sprout, tomato",
      price: 7.95,
      subcategory: "cold"
    },
    {
      name: "Veggie - Full",
      description: "Pepper jack, avocado, sprout, tomato",
      price: 9.25,
      subcategory: "cold"
    },
    {
      name: "Southwest Chicken Breast",
      description: "Grilled Onion, Poblano Pepper, Tomato, Lettuce, Jack Cheese",
      price: 9.50,
      subcategory: "hot"
    },
    {
      name: "Portobello Fresh Mozzarella",
      description: "Caramelized Onion, Roasted Pepper, Tomato, Field Greens, Basil Aioli",
      price: 9.50,
      subcategory: "hot"
    },
    {
      name: "Chipotle BBQ Pork Sandwich with Pickled Jalapeño Slaw",
      description: "",
      price: 9.50,
      subcategory: "hot"
    },
    {
      name: "Bacon Burger",
      description: "Swiss, Lettuce, Tomato",
      price: 9.25,
      subcategory: "hot"
    },
    {
      name: "Mexi Burger",
      description: "Pepper Relish, Pepper Jack, Tomato, Lettuce, Guacamole",
      price: 9.25,
      subcategory: "hot"
    },
    {
      name: "Herb Marinated Top Sirloin",
      description: "Crimini Mushrooms, Caramelized Onion, Gorgonzola, Basil Aioli, Served Open Faced on Focaccia",
      price: 10.95,
      subcategory: "hot"
    },
    {
      name: "Roast Beef with Ancho Au Jus",
      description: "Jack Cheese, Grilled Onions, Served on Crumb Bros. Baguette",
      price: 9.75,
      subcategory: "hot"
    },
    {
      name: "Blackened Catfish",
      description: "Creole Peppers & Onions, Fresh Herb Aioli, Served on house made Sourdough",
      price: 9.75,
      subcategory: "hot"
    }
  ],
  soupsAndSalads: [
    {
      name: "French Onion",
      description: "",
      price: 4.95
    },
    {
      name: "French Onion - Half Combo",
      description: "With small green salad, fresh fruit or house pasta",
      price: 7.25
    },
    {
      name: "French Onion - Full Combo",
      description: "With half pasta of the day",
      price: 8.75
    }
  ],
  fajitas: [
    {
      name: "Chicken",
      description: "Onions, Poblano and Bell Peppers, Guacamole, Two Salsas",
      price: 10.95
    },
    {
      name: "Sirloin Steak",
      description: "Onions, Poblano and Bell Peppers, Carrots, Onion, Guacamole, Two Salsas",
      price: 10.95
    }
  ],
  tacos: [
    {
      name: "Beer Battered Fish",
      description: "Jalapeño Remoulade, Roasted Salsa, Cabbage",
      price: 9.95
    },
    {
      name: "Carne Asada (Marinated Sirloin)",
      description: "Guacamole, Tomatillo Salsa",
      price: 9.95
    },
    {
      name: "Citrus Marinated Chicken",
      description: "Guacamole, Tomatillo Salsa",
      price: 9.95
    },
    {
      name: "Grilled Veggie",
      description: "Zucchini, Yellow Squash, Bell Peppers, Onion, Guacamole, Tomatillo Salsa",
      price: 9.95
    }
  ],
  enchiladas: [
    {
      name: "Beef Enchiladas - Uno",
      description: "With Southwestern Succotash, Black Beans with Chipotle Crema",
      price: 8.50
    },
    {
      name: "Beef Enchiladas - Dos",
      description: "With Southwestern Succotash, Black Beans with Chipotle Crema",
      price: 9.95
    },
    {
      name: "Beef Enchiladas - Tres",
      description: "With Southwestern Succotash, Black Beans with Chipotle Crema",
      price: 11.50
    },
    {
      name: "Chicken Enchiladas - Uno",
      description: "With Southwestern Succotash, Black Beans with Chipotle Crema",
      price: 8.50
    },
    {
      name: "Chicken Enchiladas - Dos",
      description: "With Southwestern Succotash, Black Beans with Chipotle Crema",
      price: 9.95
    },
    {
      name: "Chicken Enchiladas - Tres",
      description: "With Southwestern Succotash, Black Beans with Chipotle Crema",
      price: 11.50
    },
    {
      name: "Veggie Enchiladas - Uno",
      description: "With Southwestern Succotash, Black Beans with Chipotle Crema",
      price: 8.50
    },
    {
      name: "Veggie Enchiladas - Dos",
      description: "With Southwestern Succotash, Black Beans with Chipotle Crema",
      price: 9.95
    },
    {
      name: "Veggie Enchiladas - Tres",
      description: "With Southwestern Succotash, Black Beans with Chipotle Crema",
      price: 11.50
    },
    {
      name: "Chili Relleno Stuffed with Jack Cheese & Corn",
      description: "Glazed Yam, Chayote Squash Succotash, Red Chili Sauce",
      price: 9.95
    },
    {
      name: "Pepita Crusted Salmon with Chipotle Glaze",
      description: "Chevre whipped yams, jicama slaw, tomatillo sauce",
      price: 10.95
    }
  ],
  quiche: [
    {
      name: "Bacon, Swiss, Mushroom, Zucchini",
      description: "Choice of Fresh Fruit or Green Salad",
      price: 8.95
    }
  ],
  greenSalads: [
    {
      name: "Grilled Red Trout",
      description: "Lentils, Tomatoes, Cukes, Green Beans, Red Bells, Almonds, Sundried Tomato Vinaigrette",
      price: 10.95
    },
    {
      name: "Smoked Turkey",
      description: "Cheese Tortellini, Bacon, Tomato, Cucumber, Egg, Black Bean-Corn Salsa, Avocado",
      price: 9.95
    },
    {
      name: "Asian Grilled Chicken",
      description: "Snow Peas, Carrot Slaw, Red Bells, Water Chestnut, Peanuts, Baby Corn, Cilantro, Cukes, Spicy Peanut Dressing",
      price: 10.50
    },
    {
      name: "Southwest Grilled Chicken",
      description: "Tomato, Guacamole, pepitas, Jicama, Corn & Black Bean Salsa, Orange Wedges, Spicy Citrus Vinaigrette",
      price: 10.50
    },
    {
      name: "Mediterranean",
      description: "Italian Sausage, Artichoke Hearts, Green Beans, Roma Tomato, Kalamatas, Red Onion, Cucumber, Croutons, Parmesan, Fresh Mozzarella, Gorgonzola Vinaigrette",
      price: 9.95
    },
    {
      name: "Grilled Salmon",
      description: "Artichoke tapenade, shredded kale, corn, radish, parmesan crisps",
      price: 11.50
    }
  ]
};

module.exports = menuData;
