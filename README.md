# Suppress Cache

Install it directly from the [NPM registry](https://www.npmjs.com/package/@mrrobotdotapp/suppresscache):

```bash
npm i @mrrobotdotapp/suppresscache
```

This file is used on [the bot](https://mrrobot.app) for no cache files from CDNs. 
Discord uses CloudFlare for caching management which can be problematic when you change an image and display it on the platform.
Even after a change on your side, Discord can still keep the old version in its cache.

> **Note**
> 
> Formerly called **NoCache**, it has been renamed because the package name on NPM already exists.

## 💻 Code

```js
const { getFolderIcons } = require('@mrrobotdotapp/suppresscache');

getFolderIcons(
  "https://mrrobot.app/Folder/Of/Icons",
  "myFileName.png",
  true,
  false
)
```

Give that :

```bash
[suppressCache] Output : https://mrrobot.app/Folder/Of/Icons/file.png?suppressCache=gb0cqe0j
```

You can test this code directly with [`./test/app.js`](./test/app.js).

### 🎈 Awesome links

Don't hesitate to follow me, you can also contribute to the development of all projects Open Source of Mr. Robøt by making a donation.

[![dependency - suppressCache](https://img.shields.io/badge/dependency-suppresscache-red?logo=npm&logoColor=white&style=for-the-badge)](https://www.npmjs.com/package/@mrrobotdotapp/suppresscache)
[![Twitter Follow](https://img.shields.io/badge/Follow%20me%20on-Twitter-1DA1F2?&logo=Twitter&style=for-the-badge)](https://twitter.com/Thomasbnt_) [![Discord](https://img.shields.io/discord/367753345575944221?style=for-the-badge&logo=discord&logoColor=white&labelColor=5865F2&color=%2357F287)](https://mrrobot.app/discord) [![GitHub Sponsors](https://img.shields.io/badge/Sponsor%20me-%23EA54AE.svg?&style=for-the-badge&logo=github-sponsors&logoColor=white)](https://github.com/sponsors/thomasbnt) [![Support me on Buy Me a Coffee](https://img.shields.io/badge/-Support%20me-%23FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/thomasbnt?via=thomasbnt)
