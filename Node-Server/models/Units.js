module.exports = (sequelize, DataTypes) => {
    const Units = sequelize.define("Units", {
      unit_name: {
        type: DataTypes.STRING,
      }
    });
    return Units;
  };
  