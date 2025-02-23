export const handleError = (statusCodeO , messageO) =>{
    const error = new Error;
    error.statusCode = statusCodeO;
    error.message = messageO;

    return error;
}