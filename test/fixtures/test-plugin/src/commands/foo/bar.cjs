const Command = {
  aliases: ['foo:alias', 'foo:bar:alias', 'bar'],
  description: 'foo bar description',
  run() {
    console.log('running Bar')
  },
}

module.exports = Command
