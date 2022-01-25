module.exports = (sequelize, DataTypes) => {
    const Stages = sequelize.define("Stages", {
        year: {
        type: DataTypes.STRING,
      }
    });
    return Stages;
  };
  