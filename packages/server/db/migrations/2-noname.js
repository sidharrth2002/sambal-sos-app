"use strict";

var Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * removeColumn "title" from table "flags"
 * removeColumn "status" from table "flags"
 * addColumn "image" to table "flags"
 *
 **/

var info = {
  revision: 2,
  name: "noname",
  created: "2021-07-02T15:34:22.878Z",
  comment: "",
};

var migrationCommands = [
  {
    fn: "removeColumn",
    params: ["flags", "title"],
  },
  {
    fn: "removeColumn",
    params: ["flags", "status"],
  },
  {
    fn: "addColumn",
    params: [
      "flags",
      "image",
      {
        type: Sequelize.TEXT,
        field: "image",
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
          queryInterface.sequelize
            .query("DROP TYPE IF EXISTS enum_flags_status")
            .then(resolve);
        }
      }
      next();
    });
  },
  info: info,
};
