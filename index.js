const assert = {
  type(val, type) {
    if (typeof val !== type) {
      throw new TypeError(`Expected '${val}' to be a '${type}', got '${typeof val}'`);
    }
  },
};

function isEmptyLine(str) {
  assert.type(str, 'string');

  const emptyCharacters = [
    '\n',
    ' ',
  ];

  return str.split('').every(ch => emptyCharacters.indexOf(ch) !== -1);
}

export default (str, count = 2, character = ' ') => {
  assert.type(str, 'string');
  assert.type(character, 'string');

  return str.split('\n').map(line => {
    if (isEmptyLine(line)) return line;
    return `${character.repeat(count)}${line}`;
  }).join('\n');
};

