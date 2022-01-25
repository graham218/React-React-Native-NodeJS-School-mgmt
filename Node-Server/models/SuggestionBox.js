module.exports = (sequelize, DataTypes) => {
    const SuggestionBox = sequelize.define("SuggestionBox", {
        written_by: {
        type: DataTypes.STRING,
      },
      full_name: {
        type: DataTypes.STRING,
      },
      suggestion: {
        type: DataTypes.STRING,
      },
      check: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.STRING,
      }
    });
    return SuggestionBox;
  };
  