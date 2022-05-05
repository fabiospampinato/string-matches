
/* IMPORT */

import {describe} from 'fava';
import stringMatches from '../dist/index.js';

/* MAIN */

describe ( 'stringMatches', it => {

  it ( 'Retrieves all the matches', t => {

    const test = 'A tidy tiger tied a tighter tie to tidy her tiny tail';
    const matches = stringMatches ( test, /tidy/g );

    t.is ( matches.length, 2 );
    t.is ( matches[0].index, 2 );
    t.is ( matches[1].index, 35 );

  });

  it ( 'Work with non-global regexes too', t => {

    const test = 'A tidy tiger tied a tighter tie to tidy her tiny tail';
    const matches = stringMatches ( test, /tidy/ );

    t.is ( matches.length, 1 );

  });

  it ( 'Can limit the number of matches', t => {

    const test = 'A tidy tiger tied a tighter tie to tidy her tiny tail';
    const matches = stringMatches ( test, /ti/g, 2 );

    t.is ( matches.length, 2 );

  });

});
