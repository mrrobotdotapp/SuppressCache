# NoCache

This file is used on [the bot](https://mrrobot.app) for no cache files from CDNs. 
Discord uses CloudFlare for caching management which can be problematic when you change an image and display it on the platform. 
Even after a change on your side, Discord can still keep the old version in its cache.

### 💻 Code

```js
FolderIcons = 'https://mrrobot.app/Folder/Of/Icons'

function getFolderIcons(File, Log) {
    const GenNumberCache = Math.round(Math.random() * 0xFFFFFFFFFF).toString(30)
    if (Log) console.log (`Out : ${FolderIcons}/${File}?NoCache=${GenNumberCache}`)
    return `${FolderIcons}/${File}?NoCache=${GenNumberCache}`
}
``` 

🔬 Out : _https://mrrobot.app/Folder/Of/Icons/file.png?NoCache=gb0cqe0j_ (This url not working)

### 🎈 Awesome links
Don't hesitate to follow me, you can also contribute to the development of all projects Open Source of Mr. Robøt by making a donation.

[![Twitter Follow](https://img.shields.io/twitter/follow/Thomasbnt_?color=%231DA1F2&label=Follow%20me&logo=Twitter&style=for-the-badge)](https://twitter.com/Thomasbnt_) [![Discord](https://img.shields.io/discord/715873768374796308?color=%237289DA&label=Join%20us&logo=Discord&logoColor=white&style=for-the-badge)](https://mrrobot.app/discord) [![Follow me on DEV](https://img.shields.io/badge/dev.to-%2308090A.svg?&style=for-the-badge&logo=dev.to&logoColor=white&alt=devto)](https://dev.to/mrrobot) [![GitHub Sponsors](https://img.shields.io/badge/Sponsor%20me-%23EA54AE.svg?&style=for-the-badge&logo=github-sponsors&logoColor=white)](https://github.com/sponsors/thomasbnt) [![Support me on Buy Me a Coffee](https://img.shields.io/badge/-Support%20me-%23FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/thomasbnt?via=thomasbnt)
