/**
 *   Hello friend()
 *   GitHub of Mr. Robøt : https://github.com/Mist3r-Robot
 *    Website : https://mrrobot.app
 *    — Thomas Bnt, Mr. Robøt 2023.
 *
 *    This file is used on the bot (https://mrrobot.app) for no cache files from CDNs.
 *    Discord uses CloudFlare for caching management which can be problematic when you change an image and display it on the platform.
 *    Even after a change on your side, Discord can still keep the old version in its cache.
 */

module.exports = {
  /**
   * @param {string} baseURL
   * @param {string} file
   * @param {boolean} log
   * @param {boolean} disabled
   */
  getFolderIcons: function(baseURL, file, log, disabled) {
    let genNumberCache
    if (baseURL === null || !baseURL) return console.error("[suppressCache] Error : baseURL is not defined. Please define it.")
    if (file === null || !file) return console.error("[suppressCache] Error : file is not defined. Please define it.")
    baseURL.endsWith("/") ? baseURL = baseURL.slice(0, -1) : baseURL
    !disabled ? (genNumberCache = Math.round(Math.random() * 0xffffffffff).toString(30)) : 1
    log ? console.log(`[suppressCache] Output : ${baseURL}/${file}?suppressCache=${genNumberCache}`) : null
    return `${baseURL}/${file}?suppressCache=${genNumberCache}`
  }
}