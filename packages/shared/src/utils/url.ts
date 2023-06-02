const DUMMY_URL_BASE = 'http://clerk-dummy';

export function parseSearchParams(queryString = ''): URLSearchParams {
  if (queryString.startsWith('?')) {
    queryString = queryString.slice(1);
  }
  return new URLSearchParams(queryString);
}

export function stripScheme(url = ''): string {
  return (url || '').replace(/^.+:\/\//, '');
}

export function addClerkPrefix(str: string | undefined) {
  if (!str) {
    return '';
  }
  let regex;
  if (str.match(/^(clerk\.)+\w*$/)) {
    regex = /(clerk\.)*(?=clerk\.)/;
  } else if (str.match(/\.clerk.accounts/)) {
    return str;
  } else {
    regex = /^(clerk\.)*/gi;
  }

  const stripped = str.replace(regex, '');
  return `clerk.${stripped}`;
}

export function isRelativeUrl(str: string) {
  const url = new URL(str, DUMMY_URL_BASE);

  return url.origin === DUMMY_URL_BASE;
}
