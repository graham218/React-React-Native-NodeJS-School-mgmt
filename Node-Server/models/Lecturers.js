module.exports = (sequelize, DataTypes) => {
    const Lecturers = sequelize.define("Lecturers", {
      lecturer_number: {
        type: DataTypes.STRING,
      },
      full_name: {
        type: DataTypes.STRING,
      },
      course: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      stage: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      school_email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      school_password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      total_fee_billed: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      total_fee_paid: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fee_balance: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    });

    Lecturers.associate = (models) => {
        Lecturers.hasMany(models.Lecturers, {
          onDelete: "cascade",
        });
      };
    return Lecturers;
  };
  