// const SecurityService = {};
exports.checkForParams = function (params) {
    var keys = Object.keys(params);
    var missingParams = [];
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        if (!params[key])
            missingParams.push(key);
    }
    if (missingParams.length > 0)
        throw new Error("Your are missing the following params; " + missingParams);
};
// module.exports = SecurityService;
