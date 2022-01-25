module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    firstName: {
      type: Sequelize.STRING,
    },
    lastName: {
      type: Sequelize.STRING,
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
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    isStudent: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    isLec: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    isAdmin: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
  });

  Users.associate = (models) => {
    Users.hasMany(models.Likes, {
      onDelete: "cascade",
    });

    Users.hasMany(models.Posts, {
      onDelete: "cascade",
    });
  };

  return Users;
};
