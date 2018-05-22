@oclif/plugin-which
===================

find which plugin a command is in

[![Version](https://img.shields.io/npm/v/@oclif/plugin-which.svg)](https://npmjs.org/package/@oclif/plugin-which)
[![CircleCI](https://circleci.com/gh/oclif/plugin-which/tree/master.svg?style=shield)](https://circleci.com/gh/oclif/plugin-which/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/oclif/plugin-which?branch=master&svg=true)](https://ci.appveyor.com/project/oclif/plugin-which/branch/master)
[![Codecov](https://codecov.io/gh/oclif/plugin-which/branch/master/graph/badge.svg)](https://codecov.io/gh/oclif/plugin-which)
[![Downloads/week](https://img.shields.io/npm/dw/@oclif/plugin-which.svg)](https://npmjs.org/package/@oclif/plugin-which)
[![License](https://img.shields.io/npm/l/@oclif/plugin-which.svg)](https://github.com/oclif/plugin-which/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @oclif/plugin-which
$ oclif-example COMMAND
running command...
$ oclif-example (-v|--version|version)
@oclif/plugin-which/0.0.0 darwin-x64 node-v10.1.0
$ oclif-example --help [COMMAND]
USAGE
  $ oclif-example COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`oclif-example hello [FILE]`](#oclif-example-hello-file)

## `oclif-example hello [FILE]`

describe the command here

```
USAGE
  $ oclif-example hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ oclif-example hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/oclif/plugin-which/blob/v0.0.0/src/commands/hello.ts)_
<!-- commandsstop -->
