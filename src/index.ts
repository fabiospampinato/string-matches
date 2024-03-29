
/* MAIN */

const stringMatches = ( str: string, regex: RegExp, maxMatches = Infinity ): RegExpExecArray[] => {

  if ( regex.global ) {

    const matches: RegExpExecArray[] = [];

    let match;

    regex.lastIndex = 0;

    while ( match = regex.exec ( str ) ) {

      matches.push ( match );

      if ( matches.length === maxMatches ) break;

    }

    return matches;

  } else {

    const match = regex.exec ( str );

    return match ? [match] : [];

  }

};

/* EXPORT */

export default stringMatches;
