module.exports = (sequelize, DataTypes) => {
    const Programmes = sequelize.define("Programmes", {
        name: {
        type: DataTypes.STRING,
      },
      faculty: {
        type: DataTypes.STRING,
      }
    });
    return Programmes;
  };
  