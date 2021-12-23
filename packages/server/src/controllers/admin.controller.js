const JWT = require("jsonwebtoken");
const { body } = require("express-validator");
const logger = require("../../winston-config");
const db = require("../models");
const FlagNotFoundError = require("../constants/errors/FlagNotFoundError");
const InvalidInputError = require("../constants/errors/InvalidInputError");

/**
 * @swagger
 *
 *  paths:
 *    /api/admin/deleteflags:
 *      get:
 *        description: Get All flags in DB (no filter)
 *        tags:
 *          - Flag
 *        query:
 *          required: false
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  offset:
 *                    type: integer
 *                  limit:
 *                    type: integer
 *        responses:
 *          200:
 *            description: sucessfully gotten all flags
 *            content:
 *              application/json:
 *                schema:
 *                  type: array
 *                  items:
 *                    type: object
 *                    properties:
 *                      id:
 *                        type: string
 *                        format: uuid
 *                      coordinates:
 *                        type: object
 *                        properties:
 *                          coordinates:
 *                            type: array
 *                            items:
 *                              type: integer
 *                            example: [0, 0]
 *
 *                      address:
 *                        type: string
 *                      description:
 *                        type: string
 *                      image:
 *                        type: string
 *                      status:
 *                        type: string
 *                        enum: ['PENDING', 'APPROVED', 'UNDER REVIEW', 'REJECTED']
 *            500:
 *              description: Error
 *
 */
module.exports.adminGetAllFlags = (req, res) => {
  const { offset, limit } = req.query;

  db.flag
    .findAll({
      limit: !limit ? null : limit,
      offset: !offset ? null : offset,
    })
    .then((flags) => {
      res.status(200).json(flags);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

/**
 * @swagger
 *
 *  paths:
 *    /api/admin/deleteflag:
 *      delete:
 *        description: Deletes flag
 *        tags:
 *          - Flag
 *        body:
 *          required: false
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  id:
 *                    type: string
 *        responses:
 *          200:
 *            description: sucessfully deleted flag
 *
 *          500:
 *            description: Error
 *
 */
module.exports.deleteFlag = (req, res) => {
  const { id } = req.body;

  db.flag
    .destroy({
      where: {
        id,
      },
    })
    .then((stat) => res.sendStatus(200))
    .catch((err) => {
      res.status(500).send(err);
    });
};

/**
 * @swagger
 *
 *  paths:
 *    /api/admin/updateflagapproval:
 *      post:
 *        description: Updates flag
 *        tags:
 *          - Flag
 *        body:
 *          required: false
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  id:
 *                    type: string
 *                  status:
 *                    type: string
 *        responses:
 *          200:
 *            description: sucessfully updated flag
 *          400:
 *            description: invalid input (status enum incorrect)
 *          404:
 *            description: flag not found
 *          500:
 *            description: Error
 *
 */
module.exports.updateFlagApprovalStatus = (req, res) => {
  const { id, status } = req.body;
  db.flag.updateApprovalStatus(id, status, (err) => {
    if (err) {
      if (err instanceof FlagNotFoundError) {
        res.status(404).json({
          status: false,
          message: err.message,
          error: "Flag not found",
        });
      } else if (err instanceof InvalidInputError) {
        res.status(400).json({
          status: false,
          message: err.message,
          error: "Invalid input error",
        });
      } else {
        res.status(500).json({
          status: false,
          message: "some error occurred",
          error: err,
        });
      }
    } else {
      res.status(200).json({
        status: true,
        message: "Updated",
      });
    }
  });
};
