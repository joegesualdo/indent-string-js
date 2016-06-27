import test from 'ava';
import indentString from './dist';

test('Correctly indents string', t => {
  t.deepEqual(indentString("woo", 2), "  woo");
});
