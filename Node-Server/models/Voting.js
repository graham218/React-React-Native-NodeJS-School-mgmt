module.exports = (sequelize, DataTypes) => {
    const Voting = sequelize.define("Voting", {
        full_name: {
        type: DataTypes.STRING,
      },
      stage: {
        type: DataTypes.STRING,
      },
      course: {
        type: DataTypes.STRING,
      },
      seat: {
        type: DataTypes.STRING,
      },
      votes: {
        type: DataTypes.STRING,
      },
      position: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.STRING,
      }
    });
    return Voting;
  };
  