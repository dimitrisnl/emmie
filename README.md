<h1 align="center">Welcome to emmie 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <img alt="CircleCI" src="https://circleci.com/gh/dimitrisnl/emmie/tree/master.svg?style=svg" />
  <a href="https://twitter.com/dnlytras" target="_blank">
    <img alt="Twitter: dnlytras" src="https://img.shields.io/twitter/follow/dnlytras.svg?style=social" />
  </a>
</p>

> Your friendly local event emitter 📡

## Install

```sh
yarn add emmie
```

## Usage

```js
const emitter = emmie();

// Register an event listener
const fn = () => {};
emitter.on('signup', fn);

// Trigger the event
emitter.emit('signup');

// Unregister the event listener
emitter.off('signup', fn);
```

## Run tests

```sh
yarn test
```

## Author

👤 **Dimitrios Lytras**

- Website: https://dimitrioslytras.com
- Twitter: [@dnlytras](https://twitter.com/dnlytras)
- Github: [@dimitrisnl](https://github.com/dimitrisnl)

## Show your support

Give a ⭐️ if this project helped you!

---

Have a great day!
