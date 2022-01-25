module.exports = (sequelize, DataTypes) => {
    const Lecturers = sequelize.define("Lecturers", {
      lecturer_number: {
        type: DataTypes.STRING,
      },
      full_name: {
        type: DataTypes.STRING,
      },
      date_of_birth: {
        type: DataTypes.DATEONLY,
        get: function() {
          return moment.utc(this.getDataValue('date_of_birth')).format('YYYY-MM-DD');
        }
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
      total_salary_billed: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      total_salary_paid: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      salary_balance: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    });
    return Lecturers;
  };
  