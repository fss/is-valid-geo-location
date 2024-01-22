module.exports.isValidLatitude = value => Number.isFinite(value) && value >= -90 && value <= 90
module.exports.isValidLongitude = value => Number.isFinite(value) && value >= -180 && value <= 180
module.exports.isValidGeolocation = location => !!location && module.exports.isValidLatitude(location.lat) && module.exports.isValidLongitude(location.lng)
