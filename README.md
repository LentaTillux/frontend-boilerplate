:zap: frontend-boilerplate
==========================

It's boilerplate of React + Redux using Atomic Design.



## Overview

* Using Atomic Design with CSS Modules.
* Adopted Webpack for module bundler.
* Provide a skeleton generation task for components.
    - Example: `$ ./task/make-component-skeleton atoms Button`
* Support HMR(hot reload replacement) and browser-sync.
* Only front-end application. (Not support universal app)



## Main Libraries

* react
* react-helmet
* react-router
* react-redux
* react-redux-router
* redux
* redux-saga



## Tasks

You can perform some original utility tasks.

| Command                                                | Description                                             |
|:-------------------------------------------------------|:--------------------------------------------------------|
| `$ ./tasks/make-component-skeleton <type> <component>` | Make dumb component. (detail: `--help`)                 |
| `$ ./tasks/make-container-skeleton <type> <component>` | Make smart component. (detail: `--help`)                |
| `$ ./tasks/update-component-exports`                   | Create an index corresponding to the current component. |



## Boilerplate structure

**TODO**



## License

[MIT](https://raw.githubusercontent.com/tsuyoshiwada/frontend-boilerplate/master/LICENSE)
