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
Start the application

## Further docs
- [Create React App](https://github.com/facebookincubator/create-react-app)

# Guideline

## Small team
- use view-component directory structure
- use [domain, application] state only

## Large team
- use view-feature-component directory structure. Split view into reusable features
- use [domain > subdomain, application] state. Split domain into subdomain. Split actions and constant as well

# TODO
- datafetching
  - does one loading state is enougth ? if yes, remove isError, isLoading selector per domain.
- refacto props
  - props, store, components, params, actions
- add tests (remove || true)
- css in js
  - css structure framework
  - theming
- add ci
- test hooks
- clean docker ?? (dockerfile, makefile)
