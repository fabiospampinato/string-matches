# stringMatches

Retrieves all the matches of a regex in a string.

## Install

```shell
npm install string-matches
```

## Usage

```js
import stringMatches from 'string-matches';

// Let's get all the matches of a regex in a string

const str = 'A tidy tiger tied a tighter tie to tidy her tiny tail';
const regex = /tidy/g; // Don't forget the `g` flag, or it won't work
const matches = stringMatches ( str, regex );

console.log ( matches.length ); // => 2
```

## License

MIT © Fabio Spampinato
