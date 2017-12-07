# sketch-site

Point de départ de toutes les applications react Peaks !
Ce repo permet d'avoir un point de départ pour travailler rapidement sur une application react.
Il contient le strict minimum pour commencer avec react/redux. Il est fournie avec un exemple d'archi.

## Installation
```sh
npm install
rm -rf .git
git init
git remote add origin <repo_url>
```
* Renommer les occurences de `sketch-site` dans le code (README et package.json)
* S'inspirer des providers et controllers (supprimer ce qui n'est pas nécessaire)

## Usage

### Develop
```js
npm start
```

Application will be running on: [http://localhost:3000](http://localhost:3000)

### Test
```sh
npm test
```
All Tests use Jest framework. Jest runs all *.test.js files

### Build
```sh
npm run build
```
Build the application for production under `/build`

### Deploy
```sh
npm run deploy
```
This will deploy the application using `now` binary in the zeit cloud.
Deploy will:
* npm run build
* npm run serve

You can see your deployed app using the URL given by `now`
You can go to [https://zeit.co/dashboard](https://zeit.co/dashboard) to see an overview of your application

## further docs
[Create React App](https://github.com/facebookincubator/create-react-app)
[zeit/now](https://zeit.co/docs)
