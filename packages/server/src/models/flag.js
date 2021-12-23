const uuid = require("uuid/v4"); // ES5
("use strict");

// const bcrypt = require('bcrypt')
const logger = require("../../winston-config");
const FlagNotFoundError = require("../constants/errors/FlagNotFoundError");
const InvalidInputError = require("../constants/errors/InvalidInputError");

// Flag
module.exports = (sequelize, DataTypes) => {
  const Flag = sequelize.define("flag", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    coordinates: {
      type: DataTypes.GEOMETRY("POINT"),
      allowNull: false,
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    phonenumber: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    minioimage: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM("PENDING", "APPROVED", "UNDER REVIEW", "REJECTED"),
      defaultValue: "PENDING",
      allowNull: false,
    },
    rejectionReason: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    assignedAdmin: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    type: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: "GENERAL",
    },
  });

  Flag.associate = (models) => {
    Flag.belongsTo(models.user);
    Flag.belongsTo(models.user, {
      foreignKey: { name: "assignedAdmin", allowNull: true },
    });
  };

  Flag.updateApprovalStatus = function (id, status, callback) {
    this.update({ status }, { where: { id }, validate: true, returning: true })
      .then((flag) => {
        if (flag[1].length === 0) {
          // not found
          return callback(
            new FlagNotFoundError(`Flag with ${id} does not exist`)
          );
        }

        return callback(null);
      })
      .catch((err) => {
        logger.error(`DB Error: ${err.message}`);
        if (
          err.message.includes("invalid input value for enum enum_flags_status")
        ) {
          return callback(
            new InvalidInputError(
              "status must be one of: APPROVED, PENDING, UNDER REVIEW, REJECTED"
            )
          );
        } else {
          return callback(err);
        }
      });
  };

  Flag.findOneFlag = function (id, cb) {
    this.findOne({ where: { id } })
      .then((flag) => {
        if (!flag) {
          return cb(null, null);
        }
        return cb(null, flag);
      })
      .catch((err) => {
        logger.error(`DB Error: ${err.message}`);
        return cb(err);
      });
  };

  return Flag;
};
