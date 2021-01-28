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

function getFolderIcons(File) {
    const min = Math.ceil(0)
        , max = Math.floor(9999999999999)
        , GenNumberCache = Math.floor(Math.random() * (max - min + 1)) + min
    console.log (`Out : ${FolderIcons}/${File}?NoCache=${GenNumberCache}`) // Test me !
    return `${FolderIcons}/${File}?NoCache=${GenNumberCache}`
}

/* ——— This is a test ——— */
getFolderIcons('processor.png')