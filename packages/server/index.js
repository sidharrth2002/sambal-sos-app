const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

require("dotenv").config();

const { swaggerDocument, swaggerOptions } = require("./swagger.config");
const db = require("./src/models");
const routes = require("./src/routes");
const cors = require("cors");

// Modules
const logger = require("./winston-config");

let port = process.env.NODE_PORT;
if (isNaN(parseInt(port))) {
  port = 8080;
}
// create express app
const app = express();

app.use(cors());

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());

if (process.env.NODE_ENV !== "production") {
  // app.use(morgan('dev'));
  app.use(
    morgan("dev", {
      stream: logger.stream,
    })
  );
}

const swaggerDocs = swaggerJSDoc(swaggerDocument);
app.use(
  "/api-docs",
  swaggerUI.serve,
  swaggerUI.setup(swaggerDocs, swaggerOptions)
);

db.sequelize
  .sync()
  .then(() => {
    logger.info("We are connected to the database");
  })
  .catch((err) => {
    logger.error(`Unable to connect to the database:' ${err.message}`);
    throw new Error(`Unable to connect to the database:' ${err.message}`);
  });

app.get("/", (req, res) => {
  res.send("Welcome to the Sambal SOS API! You should not be here.");
});

app.use("/api", routes);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

// error handler middleware
app.use((error, req, res, next) => {
  logger.error(`Error occured: ${error}`);
  res.status(error.status || 500).send({
    error: {
      status: error.status || 500,
      message: error.message || "Internal Server Error",
    },
  });
});

const server = app.listen(process.env.PORT || 8080, () => {
  logger.info(`server started on port ${process.env.PORT || 8080}`);
});

process.on("SIGINT", () => {
  logger.warn("SIGINT RECEIVED. Shutting down gracefully");
  server.close(() => {
    logger.info("💥 Process terminated!");
  });
});
