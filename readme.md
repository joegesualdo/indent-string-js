## indent-string [![Build Status](https://travis-ci.org/joegesualdo/terminal-log-node.svg?branch=master)](https://travis-ci.org/joegesualdo/indent-string-js)
> Indent a string.

## Install
```
$ npm install --save @joegesualdo/indent-string
```

## Usage
```javascript
import indentString from ('@joegesualdo/indent-string')

indentString('hello', 2);
// '  hello'
```

## Test
```
$ npm test
```
## API
### `indentString(str, [count], [character])`

| Name      | Type     | Required | Default | Description                             |
|-----------|----------|----------|---------|---------------------------------------- |
| str       | `String` |  `yes`   |  `N/A`  | The string you want to indent           |
| count     | `Number` |  `no`    |  `0`    | The number of spaces you want to indent |
| character | `Number` |  `no`    |  ` `    | The number of spaces you want to indent |

```javascript
import indentString from ('@joegesualdo/indent-string')

indentString('hello', 2);
// '  hello'
indentString('hello', 2, '.');
// '..hello'
```
## Build
```
$ npm run build
```

## License
MIT © [Joe Gesualdo]()
