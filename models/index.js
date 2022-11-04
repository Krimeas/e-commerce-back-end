// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  through: {
    foreignKey: 'category_id',
    unique: false
  },
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id', 
  as: 'categoryId'
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'products_tagged'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'tagged_products'
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
