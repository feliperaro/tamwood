const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 400;
    res.status(statusCode);

    let jsonOutput = {
        message: err.message,
        stack: err.stack,
    }

    if (process.env.NODE_ENV === 'production') {
        delete jsonOutput.stack;
    }
    res.json(jsonOutput);
}

module.exports = {
    errorHandler,
}