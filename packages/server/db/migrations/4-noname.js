"use strict";

var Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * changeColumn "email" on table "users"
 *
 **/

var info = {
  revision: 4,
  name: "noname",
  created: "2021-07-03T04:42:21.206Z",
  comment: "",
};

var migrationCommands = [
  {
    fn: "changeColumn",
    params: [
      "users",
      "email",
      {
        type: Sequelize.STRING,
        field: "email",
        unique: true,
        allowNull: false,
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
