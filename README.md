# expressjs snippets

[![apm](https://img.shields.io/apm/v/expressjs.svg?style=flat-square)](https://atom.io/packages/expressjs)
[![apm](https://img.shields.io/apm/dm/expressjs.svg?style=flat-square)](https://atom.io/packages/expressjs)
[![apm](https://img.shields.io/apm/l/expressjs.svg?style=flat-square)](https://atom.io/packages/expressjs)

A collection of [Expressjs](http://expressjs.com) snippets for [Atom](http://atom.io)


This package also support some of the ES6 syntax.

### How to Install?
Go to `Settings > Install`

and then search for `expressjs` under `Packages`.

After installation of this package, restart Atom Editor.

### Snippets
These snippets are for daily use to avoid writing as much as it could the boilerplate code. If you like, to add yours, feel free to contribute.

#### Common Express Methods:
- `aall` | `aall6` | `aall*` | `aall*6` app.all()
- `adel` | `adel6`  app.delete()
- `adisable` app.disable()
- `adisabled` app.disabled()
- `aenable` app.enable()
- `aenabled` app.enabled()
- `aget` | `aget6` app.get()
- `apost` | `apost6` app.apost()
- `aput` | `aput6` app.put()
- `alisten` | `alisten5` | `alisten6` app.listen()
- `aset` app.set()
- `ause` app.use()
- `rjson` res.json()
- `rjsonp` res.jsonp()
- `rredirect` res.redirect()
- `rsend` res.send()
- `rstatus` res.sendStatus()

#### Initializing `app` variable
- `vapp` var app = express();
- `capp` const app = express();

#### Requiring Express
- `vexpress` var express = require('express');
- `cexpress` const express = require('express');

#### Commonly used Middleware
- `bodyParserj`  app.use(bodyParser.json());
- `bodyParserurl` app.use(bodyParser.urlencoded({extended: true}));
- `methodOverride` app.use(methodOverride('method'));
- `staticfile` app.use(express.static('public'));
- `compress` app.use(compression({level:zlib.Z_DEFAULT_COMPRESSION}));
- `helmet` app.use(helmet());


---

### Contribute
Pull requests for more snippets are welcome.

Copyright (c) 2016 Aman Mittal

