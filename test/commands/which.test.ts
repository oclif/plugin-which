import {expect, test} from '@oclif/test'

describe('which', () => {
  test
  .stdout()
  .command(['which', 'which'])
  .it('which which', ctx => {
    expect(ctx.stdout).to.contain('@oclif/plugin-which')
  })
})
