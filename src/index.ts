
/* STRING MATCHES */

function stringMatches ( str: string, regex: RegExp ): RegExpExecArray[] {

  const matches: RegExpExecArray[] = [];

  let match;

  regex.lastIndex = 0;

  while ( match = regex.exec ( str ) ) {

    matches.push ( match );

  }

  return matches;

}

/* EXPORT */

export default stringMatches;
