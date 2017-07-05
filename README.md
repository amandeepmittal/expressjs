# Expressjs Snippets

A collection of snippets for [Express.js](https://github.com/expressjs).
To initiate, you can either use shorthand methods or type an express method and rest will be autocomplete.

* Supports, es6 syntax.
* Applicable upto Expressjs 4.x.x version.

[![apm](https://img.shields.io/apm/v/expressjs.svg?style=flat-square)](https://atom.io/packages/expressjs)
[![apm](https://img.shields.io/apm/dm/expressjs.svg?style=flat-square)](https://atom.io/packages/expressjs)
[![apm](https://img.shields.io/apm/l/expressjs.svg?style=flat-square)](https://atom.io/packages/expressjs)

A collection of [Expressjs](http://expressjs.com) snippets for [Atom](http://atom.io)


## Installation
Go to `Settings > Install` and then search for `expressjs` under `Packages`.

After installing this package, please restart Atom Editor.

## Snippets Usage
These snippets are for daily use to avoid writing as much as it could the boilerplate code. If you like, to add yours, feel free to contribute.

### Common Express Methods:
_(es5 versions of methods that use keyword `function` in place of `=>` functions are suffix by `f`)_
- `aall` | `aallf` app.all()
- `adel` | `adelf`  app.delete()
- `adisable` app.disable()
- `adisabled` app.disabled()
- `aenable` app.enable()
- `aenabled` app.enabled()
- `aget` | `agetf` app.get()
- `apost` | `apostf` app.apost()
- `aput` | `aputf` app.put()
- `alisten` | `alistenf` app.listen() template
- `listen` app.listen()
- `aroute` app.route()
- `aset` app.set()
- `ause` app.use()
- `rjson` res.json()
- `rjsonp` res.jsonp()
- `rredirect` res.redirect()
- `rrender` res.render()
- `rsend` res.send()
- `rstatus` res.status()
- `rss` res.status().send();
-  `router()` express.Router()
- `rget` | `rgetf` router.get()
- `rpost` | `rpostf` router.apost()
- `rput` | `rputf` router.put()
- `rall` | `rallf` router.all()
- `rdel` | `rdelf`  router.delete()

### Initializing `app` variable
- `app` const app = express();

### Requiring Express
- `express` const express = require('express');

### Requiring Express-Session
- `session` const session = require('express-session');

## Commonly used Middleware
- `bodyparserj`  app.use(bodyParser.json());
- `bodyparserurl` app.use(bodyParser.urlencoded({extended: true}));
- `methodoverride` app.use(methodOverride('method'));
- `staticfile` app.use(express.static('public'));
- `compress` app.use(compression({level:zlib.Z_DEFAULT_COMPRESSION}));
- `helmet` app.use(helmet());
- `logger` app.use(logger());

---

### Contribute
Pull requests for more snippets are welcome. If you like to add yours, feel free to contribute.

In lieu of a formal style guide, take care to maintain the existing coding style.

## Contributors
* Rita Bradley PR[#1](https://github.com/amandeepmittal/expressjs/pull/1) | [Github](https://github.com/ritabradley)

Copyright (c) Aman Mittal