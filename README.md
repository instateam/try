# try 🚀

`try` is a command line utility to try executing a shell command and retry if it fails or repeat even if it succeeds.

![try](https://i.imgur.com/lt38vOH.png)

You run a long running command and leave to grab a ☕️, hoping to come back to a completed execution but you come back to find that the process failed due to a connectivity issue which is now fixed 🎩. You are now left to re-run the process and spend several caffeine-powered minutes staring at your terminal. Never again!

## Usage

Use the `try` keyword.

### Flags

```bash
-a, --attempts <number>  => Maximum number of retry attempts.

-t, --timeout  <seconds> => Seconds between retries.

-c, --command  <cmd>     => Command to try

-f, --force-repeat       => Force repeated execution even if it succeeds'

```

### Examples

`try -c ls -t 5 -a 5 -f`

`try --command ls --timeout 5 -attempts 5 -force-repeat`

`try -c 'ls -la' —timeout 5`

`try -c "ls -la" —attempts 5`

Note that multi-word commands or commands with flags must be enclosed in single or double quotes (' ' or " ").



##### Made with ❤️.

