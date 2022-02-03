module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isStudent: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isLec: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
  });
  Users.associate = (models) => {
    Users.hasOne(models.Students, {
      onDelete: "cascade",
    });
    Users.hasOne(models.Lecturers, {
      onDelete: "cascade",
    });
    Users.hasOne(models.Admin, {
      onDelete: "cascade",
    });
  };
  return Users;
};
