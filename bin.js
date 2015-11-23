#! /usr/bin/env node
'use strict';

const argv = process.argv.slice(2);
const path = `${__dirname}/package.json`;
const stat = require('fs').stat;

stat(path, function (error) {
  if (error) { return console.error('No package found.'); }

  const config = require(path);
  const scripts = Object.keys(config.scripts);

  if (!scripts) { return console.error('No scripts found in package.json'); }

  const scriptsInfo = config.scriptsInfo;

  if (!argv.length) {
    return scripts.forEach(script => {
      const prefix = script.slice(0, 3);

      if (['pre', 'post'].indexOf(prefix) > -1) { return; }
      if (!scriptsInfo || !scriptsInfo[script]) { return console.log(script); }

      console.log(`${script} - ${scriptsInfo[script]}`);
    });
  }

  if (scripts.find(script => script === argv[0])) {
    argv.unshift('run');
    argv.push('-s');
  }

  require('child_process').spawnSync('npm', argv, {
    env: process.env,
    cwd: __dirname,
    stdio: 'inherit'
  });
});
