module.exports = (sequelize, DataTypes) => {
    const Faculty = sequelize.define("Faculty", {
        school: {
        type: DataTypes.STRING,
      }
    });
    return Faculty;
  };
  