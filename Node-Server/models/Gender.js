module.exports = (sequelize, DataTypes) => {
    const Gender = sequelize.define("Gender", {
        gender: {
        type: DataTypes.STRING,
      }
    });
    return Gender;
  };
  