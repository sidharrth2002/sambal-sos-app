"use strict";

var Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * addColumn "status" to table "flags"
 * addColumn "address" to table "flags"
 *
 **/

var info = {
  revision: 3,
  name: "noname",
  created: "2021-07-03T04:37:50.919Z",
  comment: "",
};

var migrationCommands = [
  {
    fn: "addColumn",
    params: [
      "flags",
      "status",
      {
        type: Sequelize.ENUM("PENDING", "APPROVED", "UNDER REVIEW", "REJECTED"),
        field: "status",
        allowNull: false,
        defaultValue: "PENDING",
      },
    ],
  },
  {
    fn: "addColumn",
    params: [
      "flags",
      "address",
      {
        type: Sequelize.TEXT,
        field: "address",
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
        } else resolve();
      }
      next();
    });
  },
  info: info,
};
