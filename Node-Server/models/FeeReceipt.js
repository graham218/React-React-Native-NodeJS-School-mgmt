module.exports = (sequelize, DataTypes) => {
    const FeeReceipt = sequelize.define("FeeReceipt", {
        username: {
        type: DataTypes.STRING,
      },
      full_name: {
        type: DataTypes.STRING,
      },
      stage: {
        type: DataTypes.STRING,
      },
      exams: {
        type: DataTypes.STRING,
      },
      co_ocurricular_activities: {
        type: DataTypes.STRING,
      },
      hostel_charges: {
        type: DataTypes.STRING,
      },
      library_chargess: {
        type: DataTypes.STRING,
      },
      internet_charges: {
        type: DataTypes.STRING,
      },
      electricity_charges: {
        type: DataTypes.STRING,
      },
      food_charges: {
        type: DataTypes.STRING,
      },
      furniture_charges: {
        type: DataTypes.STRING,
      },
      water_charges: {
        type: DataTypes.STRING,
      }
    });
    return FeeReceipt;
  };
  