#!/usr/bin/env node

var commander = require('commander')
var execSync = require('child_process').execSync
var sleep = require('sleep')
var pack = require('./package.json')

commander
    .version(pack.version)
    .description(pack.description)
    .option('-c, --command  <cmd>', 'Command to try')
    .option('-a, --attempts <number>', 'Maximum number of retry attempts. DEFAULT = 4')
    .option('-t, --timeout  <seconds>', 'Seconds between retries. DEFAULT = 4')
    .option('-f, --force-repeat', 'Force repeated execution even if it succeeds')
    .parse(process.argv)

function main() {
    var command = commander.command || ''
    var attemptCount = 0
    var attempts = parseInt(commander.attempts || 4, 10)
    var timeout = parseInt(commander.timeout || 4, 10)
    var forceRepeat = commander.forceRepeat || false

    while (attemptCount++ < attempts) {
        var res = execSync(command, { stdio: [0, 1, 2] })
        if (res.status == 0 && !forceRepeat)
            break
        sleep.sleep(timeout)
    }
}

main()
process.on('SIGINT', process.exit())
