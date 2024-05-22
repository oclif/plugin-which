import {runCommand} from '@oclif/test'
import {expect} from 'chai'
import {dirname, join} from 'node:path'
import {fileURLToPath} from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'fixtures/test-plugin')

describe('which', () => {
  it('should return plugin name for colon separated command', async () => {
    const {result} = await runCommand<{plugin: string}>('which foo:bar', {root})
    expect(result?.plugin).to.equal('test-plugin')
  })

  it('should return plugin name for quoted space separated command', async () => {
    const {result} = await runCommand<{plugin: string}>('which "foo bar"', {root})
    expect(result?.plugin).to.equal('test-plugin')
  })

  it('should return plugin name for unquoted space separated command', async () => {
    const {result} = await runCommand<{plugin: string}>('which foo bar', {root})
    expect(result?.plugin).to.equal('test-plugin')
  })

  it('should return plugin name and aliasOf for alias', async () => {
    const {result} = await runCommand<{aliasOf: string; plugin: string}>('which foo:alias', {root})
    expect(result?.plugin).to.equal('test-plugin')
    expect(result?.aliasOf).to.equal('foo bar')
  })

  it('should not return aliasOf if not an alias', async () => {
    const {result} = await runCommand<{aliasOf: string; plugin: string}>('which foo:bar', {root})
    expect(result?.plugin).to.equal('test-plugin')
    expect(result?.aliasOf).to.be.undefined
  })

  it('should throw error if no command is provided', async () => {
    const {error} = await runCommand('which', {root})
    expect(error?.message).to.contain('"which" expects a command name')
  })
})
