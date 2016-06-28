import assert from '@joegesualdo/assert';
import isEmptyLine from '@joegesualdo/is-empty-line';

export default (str, count = 2, character = ' ') => {
  assert.type(str, 'string');
  assert.type(character, 'string');

  return str.split('\n').map(line => {
    if (isEmptyLine(line)) return line;
    return `${character.repeat(count)}${line}`;
  }).join('\n');
};

