export function isValidLatitude (value) {
  return Number.isFinite(value) && value >= -90 && value <= 90;
}

export function isValidLongitude (value) {
  return Number.isFinite(value) && value >= -180 && value <= 180;
}

export function isValidGeolocation (location) {
  return !!location && isValidLatitude(location.lat) && isValidLongitude(location.lng);
}
