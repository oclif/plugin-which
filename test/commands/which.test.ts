import {expect, test} from '@oclif/test'

describe('which', () => {
  test
  .stdout()
  .command(['which', 'which'])
  .it('which which', ctx => {
    expect(ctx.stdout).to.contain('@oclif/plugin-which')
  })

  test
  .stdout()
  .command(['which'])
  .catch(error => {
    expect(error.message).to.contain('"which" expects a command name.  Try something like "which your:command:here" ')
  })
  .it('checks arg was provided')
})
