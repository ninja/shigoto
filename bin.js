#! /usr/bin/env node
'use strict';

const argv = process.argv.slice(2);
const stat = require('fs').stat;
const resolve = require('path').resolve;
let cwd;
let config;

stat(resolve(__dirname, '../../package.json'), function (error) {
  if (error) {
    cwd = __dirname;
    config = require('./package.json');
  }
  else {
    cwd = resolve(__dirname, '../..');
    config = require('../../package.json');
  }

  const scripts = Object.keys(config.scripts);
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
    cwd: cwd,
    stdio: 'inherit'
  });
});
