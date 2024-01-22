/**
 * @param value
 * @return {boolean}
 */
export function isValidLatitude (value) {
  return Number.isFinite(value) && value >= -90 && value <= 90
}

/**
 * @param value
 * @return {boolean}
 */
export function isValidLongitude (value) {
  return Number.isFinite(value) && value >= -180 && value <= 180
}

/**
 * @param location
 * @param {number} location.lat
 * @param {number} location.lng
 * @return {boolean}
 */
export function isValidGeolocation (location) {
  return !!location && isValidLatitude(location.lat) && isValidLongitude(location.lng)
}
