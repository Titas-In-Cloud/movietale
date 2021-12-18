import winston from "winston";

/**
 * Logger which logs all errors which can happen either with methods called from controllers
 * directory or with the database. Each error log will have a timestamp.
 *
 * @type {winston.Logger}
 */
const error_logger = winston.createLogger({
    level: "error",
    format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
    transports: [
        new winston.transports.File({
            filename: "logs/error.log",
            format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
        }),
    ]
})

export default error_logger;
