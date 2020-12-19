/**
 * Check the integrity of the url
 * @param url checkUrl
 */
export function checkUrl(url: string): boolean {
  return /^((ht|f)tps?):\/\/?/.test(url)
}
