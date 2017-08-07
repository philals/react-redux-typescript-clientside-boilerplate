# react-redux-typescript-webpack-clientside-boilerplate

Template for a client side rendered React Redux application. It comes with Hapi as it's server, but the output can we used on static site hosts such as GitHub Pages or AWS S3.

SCSS files are next to the componenets.
Uses unpkg.com as CDN for React.

To serve from localhost:8000 via nodemon.

```
git clone https://github.com/philals/react-redux-typescript-webpack-clientside-boilerplate.git
cd react-redux-typescript-webpack-clientside-boilerplate
npm install
npm run build
npm run serve-watch
```

There is also `npm run build-watch`.

Public assets will be in ./dist/public and the server will be in dist/server.js

PR with improvments welcome.

Credit:
- https://www.typescriptlang.org/docs/handbook/react-&-webpack.html
- https://www.jonathan-petitcolas.com/2015/05/15/howto-setup-webpack-on-es6-react-application-with-sass.html
