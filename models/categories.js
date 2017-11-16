module.exports = function(sequelize, DataTypes) {
// Dependencies
// =============================================================

// // This may be confusing but here Sequelize (capital) references the standard library
// var Sequelize = require("sequelize");
// // sequelize (lowercase) references our connection to the DB.
// var sequelize = require("../config/config.js");

// Creates a  model that matches up with DB
var Categories = sequelize.define("Categories", {
  top: {
    type: DataTypes.BOOLEAN,
  },

 bottom:  {
    type: DataTypes.BOOLEAN,
  },    
 
 dress:  {
    type: DataTypes.BOOLEAN,
  },
        
  socks:  {
    type: DataTypes.BOOLEAN,
  },
      
  shoes:  {
    type: DataTypes.BOOLEAN,
  },
  
 accessories:  {
    type: DataTypes.BOOLEAN,
  },  
 
 season:  {
    type: DataTypes.STRING,
  },
  
 color:  {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
 emotion:  {
    type: DataTypes.STRING,
  },

 brand:  {
    type: DataTypes.STRING,
  },  
 
 planner:  {
    type: DataTypes.BOOLEAN,
  },
   favorites:  {
    type: DataTypes.BOOLEAN,
  },
 image_url:  {
    type: DataTypes.STRING,
    allowNull: false,
  }, 
},{
  timestamps: true
});

// // Syncs with DB
// items.sync();

// // Makes the Model available for other files (will also create a table)
// module.exports = Items;

 Categories.associate = function(models) {
    // Associating Profile with Items
    // When Profile is deleted, also delete any associated Items
    Categories.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

 return Categories;

};
