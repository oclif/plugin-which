import {Command, ux} from '@oclif/core'

export default class Which extends Command {
  static description = 'Show which plugin a command is in.'
  static examples = [
    {
      command: '<%= config.bin %> <%= command.id %> help',
      description: 'See which plugin the `help` command is in:',
    },
  ]

  static strict = false

  async run(): Promise<void> {
    const {argv} = await this.parse(Which)

    if (argv.length === 0) {
      throw new Error('"which" expects a command name.  Try something like "which your:command:here" ')
    }

    let command = argv

    if (argv.length === 1 && typeof argv[0] === 'string') {
      // If this if statement is true then the command to find was passed in as a single string, e.g. `mycli which "my command"`
      // So we must use the topicSeparator to split it into an array
      command = argv[0].split(this.config.topicSeparator)
    }

    const cmd = this.config.findCommand(command.join(':'), {must: true})
    ux.styledHeader(command.join(this.config.topicSeparator))
    ux.styledObject(
      {
        plugin: cmd.pluginName,
      },
      ['plugin'],
    )
  }
}
