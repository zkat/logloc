# logloc

Adds source location to `console` logger statements, globally.

This might help find where particular logs are coming from, even
if they come from a library somewhere.

## Quickstart

`npm install logloc`

```
require("logloc");

function runme() {
  console.log("Logged!");
}
runme(); // Logs "foo (at <file>:<line>:<col>)"
```
