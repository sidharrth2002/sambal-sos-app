"use strict";

var Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * addColumn "role" to table "users"
 * addColumn "assignedAdmin" to table "flags"
 * addColumn "rejectionReason" to table "flags"
 *
 **/

var info = {
  revision: 7,
  name: "addAdmin",
  created: "2021-07-18T04:58:54.305Z",
  comment: "",
};

var migrationCommands = [
  {
    fn: "addColumn",
    params: [
      "users",
      "role",
      {
        type: Sequelize.ENUM("SUPERADMIN", "ADMIN", "USER"),
        field: "role",
        defaultValue: "USER",
        allowNull: false,
      },
    ],
  },
  {
    fn: "addColumn",
    params: [
      "flags",
      "assignedAdmin",
      {
        type: Sequelize.UUID,
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
        references: {
          model: "users",
          key: "id",
        },
        name: "assignedAdmin",
        field: "assignedAdmin",
        allowNull: true,
      },
    ],
  },
  {
    fn: "addColumn",
    params: [
      "flags",
      "rejectionReason",
      {
        type: Sequelize.TEXT,
        field: "rejectionReason",
        allowNull: true,
      },
    ],
  },
];

module.exports = {
  pos: 0,
  up: function (queryInterface, Sequelize) {
    var index = this.pos;
    return new Promise(function (resolve, reject) {
      function next() {
        if (index < migrationCommands.length) {
          let command = migrationCommands[index];
          console.log("[#" + index + "] execute: " + command.fn);
          index++;
          queryInterface[command.fn]
            .apply(queryInterface, command.params)
            .then(next, reject);
        } else {
          resolve();
        }
      }
      next();
    });
  },
  info: info,
};
