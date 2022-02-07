module.exports = (sequelize, DataTypes) => {
    const marks_yr4 = sequelize.define("marks_yr4", {
        user: {
        type: DataTypes.STRING,
      },
      full_name: {
        type: DataTypes.STRING,
      },
      stage: {
        type: DataTypes.STRING,
      },
      unit_or_subject_name: {
        type: DataTypes.STRING,
      },
      marks: {
        type: DataTypes.STRING,
      },
      grade: {
        type: DataTypes.STRING,
      }
    });
    return marks_yr4;
  };
  