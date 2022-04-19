/*

    Hello friend()
    GitHub of Mr. Robøt : https://github.com/MrRobotApp
    Website : https://thomasbnt.dev 
    — Thomas Bnt, Mr. Robøt 2021.

    This file is used on the bot (https://mrrobot.app) for no cache files from CDNs. 
    Discord uses CloudFlare for caching management which can be problematic when you change an image and display it on the platform. 
    Even after a change on your side, Discord can still keep the old version in its cache.

*/

/** 
 * @param {string} FolderIcons
 * @param {number} NoCacheVersion 
 */

const FolderIcons = 'https://mrrobot.app/Folder/Of/Icons'
const NoCacheVersion = '1'


/**
 * @param {string} file
 * @param {boolean} log
 * @param {boolean} desactivated
 */

function getFolderIcons(file, log, desactivated) {
    if (!desactivated) {
        var GenNumberCache = Math.round(Math.random() * 0xFFFFFFFFFF).toString(30)
    } else {
        var GenNumberCache = NoCacheVersion
    }
    if (log) console.log(`[NoCache] Output : ${FolderIcons}/${file}?NoCache=${GenNumberCache}`)
    return `${FolderIcons}/${file}?NoCache=${GenNumberCache}`
}

getFolderIcons('file.png', true)
