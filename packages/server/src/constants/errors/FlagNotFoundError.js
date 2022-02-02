class FlagNotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = "FlagNotFoundError";
  }
}

module.exports = FlagNotFoundError;
