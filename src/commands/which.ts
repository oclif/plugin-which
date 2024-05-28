import {Command, toConfiguredId} from '@oclif/core'
import {bold, cyan} from 'ansis'

type WhichResult = {
  aliasOf?: string
  plugin: string
}

export default class Which extends Command {
  static description = 'Show which plugin a command is in.'
  static enableJsonFlag = true

  static examples = [
    {
      command: '<%= config.bin %> <%= command.id %> help',
      description: 'See which plugin the `help` command is in:',
    },
    {
      command: '<%= config.bin %> <%= command.id %> foo:bar:baz',
      description: 'Use colon separators.',
    },
    {
      command: '<%= config.bin %> <%= command.id %> foo bar baz',
      description: 'Use spaces as separators.',
    },
    {
      command: '<%= config.bin %> <%= command.id %> "foo bar baz"',
      description: 'Wrap command in quotes to use spaces as separators.',
    },
  ]

  static strict = false

  async run(): Promise<WhichResult> {
    const {argv} = await this.parse(Which)

    if (argv.length === 0) {
      this.error('"which" expects a command name', {
        suggestions: [`Provide a command id like this, "${this.config.bin} which your:command:here"`],
      })
    }

    // if argv is length 1 and is a string, split it by the topicSeparator (e.g. "my:command" => ["my", "command"], "my command" => ["my", "command"])
    // otherwise, use argv as is (e.g. ["my", "command"] => ["my", "command"])
    const commandParts =
      argv.length === 1 && typeof argv[0] === 'string' ? argv[0].split(this.config.topicSeparator) : argv

    const cmd = this.config.findCommand(commandParts.join(':'), {must: true})

    const isAlias = cmd.aliases.includes(commandParts.join(':'))

    const result: WhichResult = {plugin: cmd.pluginName ?? 'unknown'}

    if (isAlias) {
      const possible = this.config.commands.find((c) => c.aliases.includes(cmd.id) && c.id !== cmd.id)
      if (possible) {
        result.aliasOf = toConfiguredId(possible?.id, this.config)
      }
    }

    if (!this.jsonEnabled()) {
      this.log(bold(commandParts.join(this.config.topicSeparator)) + '\n')
      this.log(`${cyan('plugin')}: ${result.plugin}`)
      if (result.aliasOf) {
        this.log(`${cyan('aliasOf')}: ${result.aliasOf}`)
      }
    }

    return result
  }
}
