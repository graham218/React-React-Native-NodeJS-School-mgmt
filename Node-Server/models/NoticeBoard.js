module.exports = (sequelize, DataTypes) => {
    const NoticeBoard = sequelize.define("NoticeBoard", {
        written_by: {
        type: DataTypes.STRING,
      },
      full_name: {
        type: DataTypes.STRING,
      },
      notice: {
        type: DataTypes.STRING,
      },
      signature: {
        type: DataTypes.STRING,
      }
    });
    return NoticeBoard;
  };
  