# CMS Made Simple webpack configuration

[![N|Solid](//www.cmsmadesimple.org/templatefiles/img/logo.png)](https://www.cmsmadesimple.org/)

Webpack is an open-source JavaScript module bundler. It is a module bundler primarily for JavaScript, but it can transform front-end assets like HTML, CSS, and images if the corresponding plugins are included. Webpack takes modules with dependencies and generates static assets representing those modules.

This repository includes the full configuration to use webpack with CMS Made Simple.

### Requirements

- Running version of CMS Made Simple version 2.x
- [Node.js / NPM](https://nodejs.org/en/) installed

### Installation

Create a CMS Made Simple stylesheet with the name "**stylesheet**" and export it. 
Then install the npm packages.

```sh
$ cd MyProject
$ npm install
```

Create a new folder "**resources**" in the root directory with the following structure.

```
├─── resources
    └─── js
        └─── app.js
    └─── scss
        └─── app.scss
```

Execute `$ npm run build` to compile your resources. You can then find your compiled resources in the following places.
- /assets/css/bundle.1.css
- /assets/js/bundle.js

# Features

  - Compile SCSS to CSS
  - Automatically prefix the CSS
  - Compile ES6/7 JS to ES5 JS
  - Minify your CSS / JS resources
