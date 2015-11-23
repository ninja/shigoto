## Shigoto - Run npm scripts anywhere.

Forget to type `run` between `npm` and your script name?
Execute npm commands in the wrong directory?

This is the module for you!

~/example/package.json

```json
{
  "bin": "build/utter.js",
  "name": "utter",
  "scripts": {
    "build": "cp node_modules/shigoto/bin.js build/utter.js",
    "hello": "node utter.js",
    "goodbye": "node utter.js --goodbye"
  },
  "scriptsInfo": {
    "hello": "Say hello. `hello --to <person>`",
    "goodbye": "Say goodbye. `goodbye --to <person>`"
  }
}
```

~/example/utter.js

```javascript
const goodbye = process.env.npm_config_goodbye;
const to = process.env.npm_config_to;

console.log(goodbye ? 'Goodbye' : 'Hello', to + '!');
```

```bash
cd ~/example
npm install shigoto --save-dev
npm link
cd ~

utter
hello - Say hello. `hello --to <person>`
goodbye - Say goodbye. `goodbye --to <person>`

utter hello
Hello!

utter hello --to Jamie
Hello Jamie!

utter goodbye
Goodbye!

utter goodbye --to Jamie
Goodbye Jamie!
```
