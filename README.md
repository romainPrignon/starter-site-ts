# sketch-site

Starting point of all peaks prototyping projects

## Installation
```sh
npm install
```

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
