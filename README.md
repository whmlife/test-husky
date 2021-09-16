# Implicit Code Splitting with React Router and Webpack

This repo demonstrates how to set up implicit code splitting and chunk loading using Webpack and React Router. It is a companion to [this blog post](http://henleyedition.com/implicit-code-splitting-with-react-router-and-webpack/).

The `before` branch is a copy of React Router's [huge apps example](https://github.com/reactjs/react-router/tree/master/examples/huge-apps) and the `after` branch contains the final refactor. Webpack's [bundle loader](https://github.com/webpack/bundle-loader) is used to remove all of the structural boilerplate in the original code, allowing us to keep all of our routing logic in one file and simplify the directory structure. This technique can be used with any naming convention or directory structure by simply updating the regular expression in `webpack.config.js`.
