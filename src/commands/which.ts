import {Command} from '@oclif/core'
import ux from 'cli-ux'

export default class Which extends Command {
  static description = 'Show which plugin a command is in.'
  static strict = false;

  async run(): Promise<void> {
    const {argv} = await this.parse(Which)
    const cmd = this.config.findCommand(argv.join(':'), {must: true})
    ux.styledHeader(cmd.id)
    ux.styledObject({
      plugin: cmd.pluginName,
    }, ['plugin'])
  }
}
