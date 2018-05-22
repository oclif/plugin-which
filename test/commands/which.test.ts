import {expect, test} from '@oclif/test'

describe('which', () => {
  test
  .stdout()
  .command(['which', 'help'])
  .it('which help', ctx => {
    expect(ctx.stdout).to.contain('@oclif/plugin-help')
  })
})
