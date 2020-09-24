const logger = {
    log: (message) => console.log('Log:', message),
    debug: (message) => console.log('Debug:', message),
    error: (message) => console.log('Error:', message),
    warn: (message) => console.log('Warn:', message)
}

module.exports.logger = logger;
