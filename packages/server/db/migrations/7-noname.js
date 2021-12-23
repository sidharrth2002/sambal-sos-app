"use strict";

var Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * addColumn "type" to table "flags"
 *
 **/

var info = {
  revision: 7,
  name: "noname",
  created: "2021-12-19T07:40:12.548Z",
  comment: "",
};

var migrationCommands = [
  {
    fn: "addColumn",
    params: [
      "flags",
      "type",
      {
        type: Sequelize.TEXT,
        field: "type",
        defaultValue: "GENERAL",
        allowNull: true,
      },
    ],
  },
];

var dropCommands = [
  {
    fn: "removeColumn",
    params: ["flags", "type"],
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
  down: function (queryInterface, Sequelize) {
    var index = this.pos;
    return new Promise(function (resolve, reject) {
      function next() {
        if (index < dropCommands.length) {
          let command = dropCommands[index];
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
