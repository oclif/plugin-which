# @oclif/plugin-which

find which plugin a command is in

[![Version](https://img.shields.io/npm/v/@oclif/plugin-which.svg)](https://npmjs.org/package/@oclif/plugin-which)
[![Downloads/week](https://img.shields.io/npm/dw/@oclif/plugin-which.svg)](https://npmjs.org/package/@oclif/plugin-which)
[![License](https://img.shields.io/npm/l/@oclif/plugin-which.svg)](https://github.com/oclif/plugin-which/blob/main/package.json)

<!-- toc -->

- [@oclif/plugin-which](#oclifplugin-which)
- [Usage](#usage)
- [Commands](#commands)
- [Contributing](#contributing)
<!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g @oclif/plugin-which
$ oclif-example COMMAND
running command...
$ oclif-example (--version)
@oclif/plugin-which/3.2.19 linux-x64 node-v18.20.5
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

  Use colon separators.

    $ oclif-example which foo:bar:baz

  Use spaces as separators.

    $ oclif-example which foo bar baz

  Wrap command in quotes to use spaces as separators.

    $ oclif-example which "foo bar baz"
```

_See code: [src/commands/which.ts](https://github.com/oclif/plugin-which/blob/3.2.19/src/commands/which.ts)_

<!-- commandsstop -->

# Contributing

See [contributing guide](./CONRTIBUTING.md)
