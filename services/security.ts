// const SecurityService = {};

exports.checkForParams = (params: any) => {
    const keys = Object.keys(params);
    const missingParams = [];
    for (let key of keys) {
        if (!params[key]) missingParams.push(key);
    }
    if (missingParams.length > 0) throw new Error(`Your are missing the following params; ${missingParams}`);
}


// module.exports = SecurityService;