module.exports = (sequelize, DataTypes) => {
    const LecturerUnits = sequelize.define("LecturerUnits", {
        username: {
        type: DataTypes.STRING,
      },
      full_name: {
        type: DataTypes.STRING,
      },
      unit_name: {
        type: DataTypes.STRING,
      },
      level_of_understanding: {
        type: DataTypes.STRING,
      }
    });
    return LecturerUnits;
  };
  