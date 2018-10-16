
/* STRING MATCHES */

function stringMatches ( str: string, regex: RegExp ): RegExpExecArray[] {

  if ( regex.flags.indexOf ( 'g' ) >= 0 ) {

    const matches: RegExpExecArray[] = [];

    let match;

    regex.lastIndex = 0;

    while ( match = regex.exec ( str ) ) {

      matches.push ( match );

    }

    return matches;

  } else {

    const match = regex.exec ( str );

    return match ? [match] : [];

  }

}

/* EXPORT */

export default stringMatches;
