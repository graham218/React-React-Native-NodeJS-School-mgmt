module.exports = (sequelize, DataTypes) => {
    const Admin = sequelize.define("Admin", {
      admin_number: {
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
      }
    });
    return Admin;
  };
  