const JWT = require("jsonwebtoken");
const { body } = require("express-validator");
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.CLIENT_ID);
const logger = require("../../winston-config");
const db = require("../models");
const axios = require("axios");

exports.validateRules = (method) => {
  switch (method) {
    case "signup": {
      return [
        body("email")
          .exists()
          .withMessage("email does not exist")
          .isEmail()
          .withMessage("Invalid email"),
        body("first_name", "enter first name").exists(),
        body("last_name", "enter last name").exists(),
        body("password")
          .exists()
          .withMessage("password does not exist")
          .isLength({ min: 5 })
          .withMessage("must be at least 5 chars long"),
      ];
    }
    case "login": {
      return [
        body("email")
          .exists()
          .withMessage("email does not exist")
          .isEmail()
          .withMessage("Invalid email"),
        // body('password').exists().withMessage('password does not exist')
      ];
    }
    default:
  }
};

/**
 *  @swagger
 *  paths:
 *    /api/auth/signup:
 *      post:
 *        description: signup in the application
 *        tags:
 *          - User
 *        requestBody:
 *          required: true
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  email:
 *                    type: string
 *                  password:
 *                    type: string
 *                  first_name:
 *                    type: string
 *                  last_name:
 *                    type: string
 *        responses:
 *          201:
 *            description: Signup successful
 *            content:
 *              application/json:
 *                schema:
 *                  type: object
 *                  properties:
 *                    status:
 *                      type: boolean
 *                    newUser:
 *                      type: object
 *          422:
 *            description: validation error
 */
module.exports.signup = (req, res) => {
  db.user.findOneUser(req.body.email, (err, data) => {
    if (err) {
      logger.error(`DB Error: ${err.message}`);
      res.status(500).json({
        status: false,
        message: "some error occured",
        error: err,
      });
    }
    if (data) {
      res.status(200).json({
        status: false,
        message: "User already exist",
      });
    } else {
      db.user
        .create(req.body)
        .then((newUser) => {
          res.status(201).json({ status: true, newUser });
        })
        .catch((er) => {
          logger.error(`DB Error: ${er.message}`);
          return res.status(500).json({
            status: false,
            message: "error creating new User",
            error: er,
          });
        });
    }
  });
};

/**
 * @swagger
 *
 *  paths:
 *    /api/auth/login:
 *      post:
 *        description: Login to the application
 *        tags:
 *          - Auth
 *        requestBody:
 *          required: true
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  email:
 *                    type: string
 *                  password:
 *                    type: string
 *        responses:
 *          200:
 *            description: login successful
 *            content:
 *              application/json:
 *                schema:
 *                  type: object
 *                  properties:
 *                    status:
 *                      type: boolean
 *                    message:
 *                      type: string
 *                    access_token:
 *                      type: string
 *                    expiresIn:
 *                      type: integer
 *          401:
 *            description: Unauthorised
 *          422:
 *            description: validation error
 */
module.exports.login = (req, res) => {
  db.user.findOneUser(req.body.email, (err, user) => {
    if (err) {
      logger.error(`DB Error: ${err.message}`);
      res.status(500).json({
        status: false,
        message: "some error occured",
        error: err,
      });
    }
    if (user) {
      // const match = user.validPassword(req.body.password)

      // if (match) {
      const expiry = "15m"; // JWT expiry duration
      const token = JWT.sign(
        { data: user.id, role: user.role },
        process.env.JWT_SECRET,
        {
          expiresIn: expiry,
        }
      );
      res.status(200).json({
        status: true,
        message: "User successfully logged in",
        access_token: token,
        expiresIn: expiry,
      });
      // } else {
      //   res.status(401).json({
      //     status: false,
      //     message: 'Wrong password'
      //   })
      // }
    } else {
      logger.info(`User not found: ${req.body.email}`);
      res.status(404).json({
        status: false,
        message: "User not found",
      });
    }
  });
};

// TODO: Implement refresh token and store refresh tokens in a database table
/**
 * @swagger
 *
 *  paths:
 *    /api/auth/google:
 *      post:
 *        description: Login to Application using Google Oauth
 *        tags:
 *          - Auth
 *        requestBody:
 *          required: true
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  token:
 *                    type: string
 *        responses:
 *          201:
 *            description: login successful
 *            content:
 *              application/json:
 *                schema:
 *                  type: object
 *                  properties:
 *                    status:
 *                      type: boolean
 *                    access_token:
 *                      type: string
 *                    user:
 *                      type: object
 *                      properties:
 *                        id:
 *                          type: string
 *                          format: uuid
 *                        email:
 *                          type: string
 *                          format: email
 */
module.exports.googleLogin = async (req, res) => {
  const { token } = req.body;

  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.CLIENT_ID,
  });
  const { email: userEmail } = ticket.getPayload();

  db.user
    .findOrCreate({
      where: {
        email: userEmail,
      },
      defaults: {
        email: userEmail,
      },
    })
    .spread((newUser, created) => {
      let spreadUser = newUser.get({
        plain: true,
      });
      const jwt = JWT.sign(
        {
          data: spreadUser.id,
          role: spreadUser.role || "USER",
        },
        process.env.JWT_SECRET,
        {
          expiresIn: process.env.JWT_EXPIRY,
        }
      );

      res
        .status(201)
        .send({ status: "Logged In", accessToken: jwt, user: spreadUser });
    })
    .catch((err) => {
      logger.error(JSON.stringify(err));
    });
};

/**
 * @swagger
 * paths:
 *   /api/auth/facebook:
 *     post:
 *       description: Oauth login using Facebook
 *       tags:
 *         - Auth
 *       requestBody:
 *         required:
 *           true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userID:
 *                   type: string
 *                   format: uuid
 *                 accessToken:
 *                   type: string
 *       responses:
 *         201:
 *           description: login successful
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: "Logged In"
 *                   accessToken:
 *                     type: string
 *                   user:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         format: uuid
 *                       email:
 *                         type: string
 *                         format: email
 *         400:
 *           description: login failed
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: "Failed"
 */

module.exports.facebookLogin = async (req, res) => {
  const { userID, accessToken } = req.body;

  logger.info(userID);
  logger.info(accessToken);

  let url = `https://graph.facebook.com/v11.0/${userID}/?fields=email&access_token=${accessToken}`;
  let facebookAuth = await axios.get(url);
  const { email } = facebookAuth.data;

  logger.info(`Email called with: ${email}`);

  db.user
    .findOrCreate({
      where: {
        email: email,
      },
      defaults: {
        email: email,
      },
    })
    .spread((newUser, created) => {
      let spreadUser = newUser.get({
        plain: true,
      });
      const jwt = JWT.sign(
        {
          data: spreadUser.id,
          role: spreadUser.role || "USER",
        },
        process.env.JWT_SECRET,
        {
          expiresIn: process.env.JWT_EXPIRY,
        }
      );

      res
        .status(201)
        .send({ status: "Logged In", accessToken: jwt, user: spreadUser });
    })
    .catch((err) => {
      logger.error(JSON.stringify(err));
    });
};
