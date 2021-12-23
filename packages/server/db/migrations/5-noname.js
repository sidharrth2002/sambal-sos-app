"use strict";

var Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * addColumn "minioimage" to table "flags"
 *
 **/

var info = {
  revision: 5,
  name: "noname",
  created: "2021-07-09T10:21:41.417Z",
  comment: "",
};

var migrationCommands = [
  {
    fn: "addColumn",
    params: [
      "flags",
      "minioimage",
      {
        type: Sequelize.TEXT,
        field: "minioimage",
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
