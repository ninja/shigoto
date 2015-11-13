const test = require('tape');
const exec = require('child_process').exec;

test('shigoto', t => {
  exec('./bin.js', error => {
    t.error(error, 'Should run without error.');
    t.end();
  });
});

test('shigoto lint', t => {
  exec('./bin.js run', error => {
    t.error(error, 'Should run without error.');
    t.end();
  });
});
