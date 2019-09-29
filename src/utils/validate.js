/**
 * Check the integrity of the url
 * @param {*} url checkUrl
 */
export function checkUrl(url) {
  if (typeof url === 'object') {
    return true
  } else {
    return /^((ht|f)tps?):\/\/?/.test(url)
  }
}
