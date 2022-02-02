module.exports.swaggerDocument = {
  definition: {
    openapi: "3.0.0", // Specification (optional, defaults to swagger: '2.0')
    info: {
      title: "Bendera Putih Backend", // Title (required)
      version: "1.0.0", // Version (required)
    },
  },
  host: "localhost:3000",
  basepath: "/api",
  servers: ["http://localhost:3000"],
  // Path to the API docs
  apis: ["./src/controllers/**/*.js"],
};

module.exports.swaggerOptions = {
  explorer: true,
};
