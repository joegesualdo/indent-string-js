export default function indentString(str, count = 2, character = ' ') {
  if (typeof str !== 'string') {
    throw new TypeError(`Expected 'input' to be a 'string', got '${typeof str}'`);
  }
  if (typeof character !== 'string') {
    throw new TypeError(`Expected 'character' to be a 'string', got '${typeof character}'`);
  }
  return str.split('\n').map(line => `${character.repeat(count)}${line}`).join('\n');
}
