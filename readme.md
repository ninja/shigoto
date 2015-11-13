## Shigoto 仕事 - Run npm scripts anywhere.

If you frequently type `npm lint` vs. `npm run lint` and/or find yourself located in the wrong project directory when executing npm commands, this is the module for you!

~/example/package.json

```json
{
  "bin": {"sayjs": "./node_modules/shigoto/bin.js"},
  "scripts": {
    "hello": "node say.js",
    "goodbye": "node say.js --goodbye"
  },
  "scriptsInfo": {
    "hello": "Say hello. `hello --to <person>`",
    "goodbye": "Say goodbye. `goodbye --to <person>`"
  }
}
```

~/example/say.js

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

sayjs
hello - Say hello. `hello --to <person>`
goodbye - Say goodbye. `goodbye --to <person>`

sayjs hello
Hello!

sayjs hello --to Jamie
Hello Jamie!

sayjs goodbye
Goodbye!

sayjs goodbye --to Jamie
Goodbye Jamie!
```
