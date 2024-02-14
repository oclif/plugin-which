import {Config, ux} from '@oclif/core'
import {expect} from 'chai'
import {dirname, join} from 'node:path'
import {fileURLToPath} from 'node:url'
import {SinonSandbox, createSandbox} from 'sinon'

const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'fixtures/test-plugin')
console.log(root)
describe('which', () => {
  let sandbox: SinonSandbox
  let config: Config

  beforeEach(async () => {
    sandbox = createSandbox()
    sandbox.stub(ux.write, 'stdout')
    config = await Config.load({root})
  })

  afterEach(async () => {
    sandbox.restore()
  })

  it('should return plugin name for colon separate command', async () => {
    const {plugin} = await config.runCommand<{plugin: string}>('which', ['foo:bar'])
    expect(plugin).to.equal('test-plugin')
  })

  it('should return plugin name for quoted space separate command', async () => {
    const {plugin} = await config.runCommand<{plugin: string}>('which', ['foo bar'])
    expect(plugin).to.equal('test-plugin')
  })

  it('should return plugin name for unquoted space separate command', async () => {
    const {plugin} = await config.runCommand<{plugin: string}>('which', ['foo', 'bar'])
    expect(plugin).to.equal('test-plugin')
  })

  it('should return plugin name and aliasOf for alias', async () => {
    const {aliasOf, plugin} = await config.runCommand<{aliasOf: string; plugin: string}>('which', ['foo:alias'])
    expect(plugin).to.equal('test-plugin')
    expect(aliasOf).to.equal('foo bar')
  })

  it('should not return aliasOf if not an alias', async () => {
    const {aliasOf, plugin} = await config.runCommand<{aliasOf: string; plugin: string}>('which', ['foo:bar'])
    expect(plugin).to.equal('test-plugin')
    expect(aliasOf).to.be.undefined
  })

  it('should throw error if no command is provided', async () => {
    try {
      await config.runCommand('which')
      throw new Error('expected error')
    } catch (error) {
      const {message} = error as Error
      expect(message).to.contain('"which" expects a command name')
    }
  })
})
