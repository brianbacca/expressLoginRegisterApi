const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "User",
    {
      fullName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        allowEmpty: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        allowEmpty: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
