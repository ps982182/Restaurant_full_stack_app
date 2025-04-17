class ErrorHandler extends Error {
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }
}

export const errorMiddleware = (err, req, res, next) => {
    err.message = err.message || "Internal Server Error";
    err.statusCode = err.statusCode || 500;
    // res.status (err.statusCode).json ({
    //     message : err.message,
    //     status : err.statusCode,
    //     stack : process.env.NODE_ENV === "development" ? err.stack : null,
    //     error : process.env.NODE_ENV === "development" ? err: null,
    //     timeStamp = new Date().toISOString(),
    //     path : req.originalUrl,
    //     method : req.method,
    //     body : req.body,
    //     query: req.query,
    //     params: req.poarams,
    //     headers: req.headers,
    //     ip: req.ip,
    //     protocol: req.protocol,
    //     hostname: req.hostname,
    //     port: req.port,
    //     httpVersion: req.httpVersion,
    //     statusMessage: res.statusMessage,
    //     statusCode: res.statusCode,
    //     status = res.status,
    //     statusType: res.statusType,
    //     statusText: res.statusText,
    //     statusCode: res.statusCode,
        return res.status(err.statusCode).json( {
            success : false,
            message : err.message,
            status : err.statusCode,
        });
    }

export default ErrorHandler;