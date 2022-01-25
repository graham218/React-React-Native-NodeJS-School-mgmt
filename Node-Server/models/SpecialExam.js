module.exports = (sequelize, DataTypes) => {
    const SpecialExam = sequelize.define("SpecialExam", {
        user: {
        type: DataTypes.STRING,
      },
      full_name: {
        type: DataTypes.STRING,
      },
      stage: {
        type: DataTypes.STRING,
      },
      unit_name: {
        type: DataTypes.STRING,
      },
      marks: {
        type: DataTypes.STRING,
      },
      grade: {
        type: DataTypes.STRING,
      },
      comments: {
        type: DataTypes.STRING,
      }
    });
    return SpecialExam;
  };
  