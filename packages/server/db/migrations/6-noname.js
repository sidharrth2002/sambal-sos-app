"use strict";

var Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * addColumn "phonenumber" to table "flags"
 *
 **/

var info = {
  revision: 6,
  name: "noname",
  created: "2021-07-10T07:46:45.000Z",
  comment: "",
};

var migrationCommands = [
  {
    fn: "addColumn",
    params: [
      "flags",
      "phonenumber",
      {
        type: Sequelize.TEXT,
        field: "phonenumber",
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
