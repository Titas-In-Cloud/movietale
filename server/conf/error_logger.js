import winston from "winston";

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
