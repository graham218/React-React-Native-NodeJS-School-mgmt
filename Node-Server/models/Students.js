module.exports = (sequelize, DataTypes) => {
    const Students = sequelize.define("Students", {
      admission_number: {
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
      date_of_birth: {
        type: DataTypes.DATEONLY,
        get: function() {
          return moment.utc(this.getDataValue('date_of_birth')).format('YYYY-MM-DD');
        }
      },
      date_of_admission: {
        type: DataTypes.DATEONLY,
        get: function() {
          return moment.utc(this.getDataValue('date_of_admission')).format('YYYY-MM-DD');
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
    return Students;
  };
  