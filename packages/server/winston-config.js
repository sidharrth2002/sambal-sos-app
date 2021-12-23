const winston = require("winston");

/**
 * Winston logger formatter
 * @returns formatted log string
 */
const myFormat = winston.format.printf(({ level, message, timestamp }) => {
  return `[${timestamp}] - ${level}: ${message}`;
});

// Winston logger configuraiton
const logger = winston.createLogger({
  level: "info",
  exitOnError: false,
  transports: [
    // - Write all logs with level `error` and below to `error.log`
    // - Write all logs with level `info` and below to `combined.log`
    new winston.transports.File({
      filename: "logs/error.log",
      level: "error",
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
      ),
      maxsize: 1024 * 1024 * 10, // 10MB
    }),
    new winston.transports.File({
      filename: "logs/combined.log",
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
      ),
      maxsize: 1024 * 1024 * 10, // 10MB
    }),
    new winston.transports.Console({
      level: "debug",
      handleExceptions: true,
      json: false,
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
          format: "YYYY-MM-DD HH:mm:ss",
        }),
        myFormat
      ),
    }),
  ],
});
logger.stream = {
  write: (message) => {
    logger.verbose(message);
  },
};

module.exports = logger;
