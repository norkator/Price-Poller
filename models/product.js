module.exports = (sequelize, type) => {
  return sequelize.define('product', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    store_number: {
      type: type.INTEGER, defaultValue: 0
    },
    product_code: type.STRING,
    product_name: type.STRING,
    original_price: type.NUMERIC,
    current_price: type.NUMERIC,
    enabled: {
      type: type.INTEGER, defaultValue: 1
    },
  })
};
