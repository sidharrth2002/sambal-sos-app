"use strict";

var Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * createTable "users", deps: []
 * createTable "flags", deps: [users]
 *
 **/

var info = {
  revision: 1,
  name: "noname",
  created: "2021-07-02T15:28:04.179Z",
  comment: "",
};

var migrationCommands = [
  {
    fn: "createTable",
    params: [
      "users",
      {
        id: {
          type: Sequelize.UUID,
          field: "id",
          primaryKey: true,
          allowNull: false,
          defaultValue: Sequelize.UUIDV4,
        },
        email: {
          type: Sequelize.STRING(50),
          field: "email",
          unique: true,
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      {},
    ],
  },
  {
    fn: "createTable",
    params: [
      "flags",
      {
        id: {
          type: Sequelize.UUID,
          field: "id",
          primaryKey: true,
          allowNull: false,
          defaultValue: Sequelize.UUIDV4,
        },
        title: {
          type: Sequelize.TEXT,
          field: "title",
          allowNull: true,
        },
        coordinates: {
          type: Sequelize.GEOMETRY("POINT"),
          field: "coordinates",
          allowNull: false,
        },
        status: {
          type: Sequelize.ENUM(
            "Pending",
            "In Progress",
            "Completed",
            "False Report"
          ),
          field: "status",
          allowNull: true,
        },
        description: {
          type: Sequelize.TEXT,
          field: "description",
          allowNull: true,
        },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
        userId: {
          type: Sequelize.UUID,
          field: "userId",
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: {
            model: "users",
            key: "id",
          },
          allowNull: true,
        },
      },
      {},
    ],
  },
];

module.exports = {
  pos: 0,
  up: function (queryInterface, Sequelize) {
    let index = this.pos;

    return new Promise(function (resolve, reject) {
      function performMigrationStep() {
        let command = migrationCommands[index];
        console.log("[#" + index + "] execute: " + command.fn);
        index++;
        queryInterface[command.fn]
          .apply(queryInterface, command.params)
          .then(next, reject);
      }

      function next() {
        if (index < migrationCommands.length) {
          if (index === 0) {
            queryInterface.sequelize
              .query("CREATE EXTENSION IF NOT EXISTS postgis;")
              .then(() => {
                performMigrationStep();
              });
          } else {
            performMigrationStep();
          }
        } else {
          resolve();
        }
      }
      next();
    });
  },
  info: info,
};
