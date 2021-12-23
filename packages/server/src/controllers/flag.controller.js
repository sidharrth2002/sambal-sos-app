const logger = require("../../winston-config");
const db = require("../models");
const sequelize = require("sequelize");
const moment = require("moment");

// TODO: only send back reports made in the past week
/**
 * @swagger
 *
 *  paths:
 *    /api/flag/getall:
 *      get:
 *        description: Get All flags in DB
 *        tags:
 *          - Flag
 *        requestBody:
 *          required: true
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
module.exports.getAllFlags = (req, res) => {
  const { offset, limit } = req.body;

  db.flag
    .findAll({
      limit: !limit ? null : limit,
      offset: !offset ? null : offset,
      where: {
        status: "APPROVED",
        updatedAt: {
          [sequelize.Op.gte]: moment().subtract(7, "days").toDate(),
        },
      },
    })
    .then((flags) => {
      res.status(200).json(flags);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

// get flags within a radius
/**
 * @swagger
 *
 *  paths:
 *    /api/flag/getallinradius:
 *      get:
 *        description: Get All flags in the radius of user
 *        tags:
 *          - Flag
 *        requestBody:
 *          required: true
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  radius:
 *                    type: integer
 *                  longitude:
 *                    type: number
 *                  latitude:
 *                     type: number
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
// TODO: debug this
module.exports.getAllFlagsInRadius = async (req, res) => {
  const { radius, latitude, longitude } = req.body;

  db.flag
    .findAll({
      attributes: [
        [
          sequelize.literal(
            "6371 * acos(cos(radians(" +
              latitude +
              ")) * cos(radians(ST_X(coordinates))) * cos(radians(" +
              longitude +
              ") - radians(ST_Y(coordinates))) + sin(radians(" +
              latitude +
              ")) * sin(radians(ST_X(coordinates))))"
          ),
          "distance",
        ],
      ],
      order: sequelize.col("distance"),
      limit: 10,
    })
    .then((inRadius) => {
      res.status(200).send(inRadius);
    });
};

// create new flag
/**
 * @swagger
 *
 *  paths:
 *    /api/flag/createflag:
 *      post:
 *        description: Create a new flag
 *        tags:
 *          - Flag
 *        requestBody:
 *          required: true
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  longitude:
 *                    type: number
 *                  latitude:
 *                     type: number
 *                  description:
 *                     type: string
 *                  image:
 *                     type: string
 *        responses:
 *          200:
 *            description: sucessfully created a new flag
 *            content:
 *              application/json:
 *                schema:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       format: uuid
 *                     coordinates:
 *                       type: object
 *                       properties:
 *                         coordinates:
 *                           type: array
 *                           items:
 *                             type: integer
 *                           example: [0, 0]
 *
 *                     address:
 *                       type: string
 *                     description:
 *                       type: string
 *                     image:
 *                       type: string
 *                     status:
 *                       type: string
 *                       enum: ['PENDING', 'APPROVED', 'UNDER REVIEW', 'REJECTED']
 *            500:
 *              description: Error
 *
 */
module.exports.createFlag = (req, res) => {
  // for now, send from frontend
  // after this, take the ID from JWT
  const { latitude, longitude, description, image, phonenumber } = req.body;

  const userId = req.decoded.data;

  const coordinates = {
    type: "Point",
    coordinates: [latitude, longitude],
  };
  db.flag
    .create({
      description: description,
      coordinates,
      userId,
      minioimage: image,
      phonenumber: phonenumber !== "" ? phonenumber : null,
      status: "PENDING",
      type: req.body.type !== undefined ? req.body.type : "GENERAL",
    })
    .then((newFlag) => res.status(200).send(newFlag))
    .catch((err) => {
      res.status(500).send(err);
    });
};

/**
 * @swagger
 *
 *  paths:
 *    /api/flag/getapproved:
 *      get:
 *        description: Get All Approved flags in DB
 *        tags:
 *          - Flag
 *        requestBody:
 *          required: true
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
module.exports.getApprovedFlags = (req, res) => {
  const { offset, limit } = req.body;

  db.flag
    .findAll({
      limit: !limit ? null : limit,
      offset: !offset ? null : offset,
      where: {
        status: "APPROVED",
      },
    })
    .then((flags) => {
      res.status(200).send(flags);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

// Delete this soon
// module.exports.createTestFlag = (req, res) => {
//   let point = { type: "Point", coordinates: [39.807222, -76.984722] };
//   db.flag
//     .create({
//       coordinates: point,
//       description: "Test Description",
//       userId: "",
//     })
//     .then((newFlag) => res.status(200).send(newFlag))
//     .catch(err => {
//       res.status(500).send(err);
//     })
// };
