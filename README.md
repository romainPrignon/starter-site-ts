# starter-site-ts

Starting point of a new React SPA

## Installation
```sh
npm install
rm -rf .git
git init
git remote add origin <repo_url>
```

Renamed all occurence of starter-site-ts in code (README and package.json)

## Usage

### Develop
```js
npm run dev
```
Application will be running on: [http://localhost:3000](http://localhost:3000)

### Lint
```sh
npm run lint
```
Lint source code with eslint.
There is also a `:fix` version

### Test
```sh
npm test
```
All Tests use Jest framework.

unit tests: `src/**/*.test.js`
functionnal tests: `src/tests/**/*.test.js`

### Build
```sh
npm run build
```
Build the application for production under `/build`

### Start
```sh
npm start
```
Start the application using Docker

## further docs
- [Create React App](https://github.com/facebookincubator/create-react-app)

# TODO
- refacto components
- refacto forms
- refacto into ts
- refacto archi (view, feature, component)
- refacto redux (domain, application good for 1 dev but what about team ?)
  - actions > domain > secret
- add tests (remove || true)
- css in js
- add ci
- test hooks
