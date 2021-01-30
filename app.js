/*

    Hello friend()
    GitHub of Mr. Robøt : https://github.com/Mist3r_Robot
    Website : https://thomasbnt.dev 
    — Thomas Bnt, Mr. Robøt 2021.

    This file is used on the bot (https://mrrobot.app) for no cache files from CDNs. 
    Discord uses CloudFlare for caching management which can be problematic when you change an image and display it on the platform. 
    Even after a change on your side, Discord can still keep the old version in its cache.

*/

/* ——— Config ——— */
FolderIcons = 'https://mrrobot.app/Folder/Of/Icons'

/* ——— function ——— */

function getFolderIcons(File, Log) {
    const GenNumberCache = Math.round(Math.random() * 0xFFFFFFFFFF).toString(30)
    if (Log) console.log (`Out : ${FolderIcons}/${File}?NoCache=${GenNumberCache}`)
    return `${FolderIcons}/${File}?NoCache=${GenNumberCache}`
}

/* ——— This is a test ——— */
getFolderIcons('file.png', true)
