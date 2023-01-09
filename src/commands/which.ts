import {Command, CliUx} from '@oclif/core'

export default class Which extends Command {
  static description = 'Show which plugin a command is in.'
  static strict = false;
  static examples = [
    {
      description: 'See which plugin the `help` command is in:',
      command: '<%= config.bin %> <%= command.id %> help',
    },
  ]

  async run(): Promise<void> {
    const {argv} = await this.parse(Which)
    let command = argv

    if (argv.length === 1 && typeof argv[0] === 'string') {
      // If this if statement is true then the command to find was passed in as a single string, e.g. `mycli which "my command"`
      // So we must use the topicSeparator to split it into an array
      command = argv[0].split(this.config.topicSeparator)
    } else {
      throw new Error('Missing 1 required arg')
    }

    const cmd = this.config.findCommand(command.join(':'), {must: true})
    CliUx.ux.styledHeader(command.join(this.config.topicSeparator))
    CliUx.ux.styledObject({
      plugin: cmd.pluginName,
    }, ['plugin'])
  }
}
