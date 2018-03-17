/**
 * Clean email address.
 * @param {String} address Address to clean.
 */
module.exports = (address) => address.split("@")[0].split(".").join("").split("+")[0] + "@" + address.split("@")[1]