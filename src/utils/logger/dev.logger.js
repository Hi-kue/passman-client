import { createLogger, format, transports } from "winston";

const devLoggerFormat = format.printf(({ level, message, timestamp, stack }) => {
  return `${timestamp} ${level}: ${stack || message}`;
});

const logger = createLogger({
  level: "debug",
  format: format.combine(
    format.colorize(),
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    format.errors({ stack: true }),
    format.splat(),
    devLoggerFormat,
  ),
  transports: [
    new transports.Console({
      stderrLevels: ["error"],
    }),
  ],
});

logger.success = (message) => logger.info(`λ ${message}`);
logger.warn = (message) => logger.warning(`λ ${message}`);
logger.error = (message, error) => logger.error(`λ ${message}`, error);
logger.debug = (message) => logger.debug(`λ ${message}`);

export default logger;
