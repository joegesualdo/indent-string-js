import test from 'ava';
import indentString from './dist';

test('Correctly indents string', t => {
  t.deepEqual(indentString("woo", 2), "  woo");
});

test('Indent multiple lines', t => {
  t.deepEqual(indentString("woo\nwee", 2), "  woo\n  wee");
});

test('Indents with custom character', t => {
  t.deepEqual(indentString("woo", 2, 'x'), "xxwoo");
});


test('Throws an error if a `string` is not provided', t => {
  t.throws(indentString.bind(this, 2));
});

test('Throws an error if the custom character is not a string', t => {
  t.throws(indentString.bind(this, 'woo', 2, 2));
});

test('Does not indent empty lines', t => {
  t.deepEqual(indentString('woo\n', 2,), '  woo\n');
});
