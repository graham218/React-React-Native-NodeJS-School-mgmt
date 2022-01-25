module.exports = (sequelize, DataTypes) => {
    const Units = sequelize.define("Units", {
      firstName: {
        type: DataTypes.STRING,
      }
    });

    return Units;
  };
  