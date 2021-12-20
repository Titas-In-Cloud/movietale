import winston from "winston";

/**
 * Logger which logs all database established connections. It will have the information
 * about connection, such as port and timestamp.
 *
 * @type {winston.Logger}
 */
const database_logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
    transports: [
        new winston.transports.File({
            filename: "src/logs/database.log",
            format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
        }),
    ]
})

export default database_logger;
