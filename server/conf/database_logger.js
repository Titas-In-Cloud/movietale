import winston from "winston";

const database_logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
    transports: [
        new winston.transports.File({
            filename: "logs/database.log",
            format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
        }),
    ]
})

export default database_logger;
