import winston from "winston";

/**
 * Logger which logs all access points of the database. For example, it logs when any of the controller
 * methods are called. Each access log will have a timestamp.
 *
 * @type {winston.Logger}
 */
const access_logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
    transports: [
        new winston.transports.File({
            filename: "logs/access.log",
            format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
        }),
    ]
})

export default access_logger;
