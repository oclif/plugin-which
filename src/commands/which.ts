import {Command} from '@oclif/command'
import ux from 'cli-ux'

export default class Which extends Command {
  static description = 'show which plugin a command is in'

  static args = [{name: 'command', required: true}]

  async run() {
    const {args} = this.parse(Which)
    const cmd = this.config.findCommand(args.command, {must: true})
    ux.styledHeader(cmd.id)
    ux.styledObject({
      plugin: cmd.pluginName,
    }, ['plugin'])
  }
}
