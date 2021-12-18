import winston from "winston";

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
