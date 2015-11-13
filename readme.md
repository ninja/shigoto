## Shigoto 仕事
### Run npm scripts anywhere.

package.json

```json
{
  "bin": {"sayjs": "./node_modules/shigoto/bin.js"},
  "scripts": {
    "hello": "node command.js --who person"
  }
}
```

command.js

```javascript
const who = process.env.npm_config_argument || 'nobody... :(';

console.log(`Hello, ${who}!`)
```

```bash
npm install shigoto --save-dev
npm link
sayjs hello
Hello, nobody... :(
sayjs hello --who Jamie
Hello, Jamie!
```
