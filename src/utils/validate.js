/**
 * Check the integrity of the url
 * @param {*} url checkUrl
 * @returns {Boolean}
 */
export function checkUrl(url) {
  return /^((ht|f)tps?):\/\/?/.test(url)
}
