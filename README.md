# @oclif/plugin-which

find which plugin a command is in

[![Version](https://img.shields.io/npm/v/@oclif/plugin-which.svg)](https://npmjs.org/package/@oclif/plugin-which)
[![CircleCI](https://circleci.com/gh/oclif/plugin-which/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/plugin-which/tree/main)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/oclif/plugin-which?branch=main&svg=true)](https://ci.appveyor.com/project/oclif/plugin-which/branch/main)
[![Downloads/week](https://img.shields.io/npm/dw/@oclif/plugin-which.svg)](https://npmjs.org/package/@oclif/plugin-which)
[![License](https://img.shields.io/npm/l/@oclif/plugin-which.svg)](https://github.com/oclif/plugin-which/blob/main/package.json)

<!-- toc -->

- [@oclif/plugin-which](#oclifplugin-which)
- [Usage](#usage)
- [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g @oclif/plugin-which
$ oclif-example COMMAND
running command...
$ oclif-example (--version)
@oclif/plugin-which/3.1.5 linux-x64 node-v18.19.1
$ oclif-example --help [COMMAND]
USAGE
  $ oclif-example COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`oclif-example which`](#oclif-example-which)

## `oclif-example which`

Show which plugin a command is in.

```
USAGE
  $ oclif-example which [--json]

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Show which plugin a command is in.

EXAMPLES
  See which plugin the `help` command is in:

    $ oclif-example which help
```

_See code: [src/commands/which.ts](https://github.com/oclif/plugin-which/blob/3.1.5/src/commands/which.ts)_

<!-- commandsstop -->
