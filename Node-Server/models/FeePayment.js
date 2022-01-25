module.exports = (sequelize, DataTypes) => {
    const FeePayment = sequelize.define("FeePayment", {
        username: {
        type: DataTypes.STRING,
      },
      full_name: {
        type: DataTypes.STRING,
      },
      amount_paid: {
        type: DataTypes.STRING,
      },
      payment_method: {
        type: DataTypes.STRING,
      }
    });
    return FeePayment;
  };
  