export function getIdFromUrl(url: string) {
  const section = url.split('/').filter((sec: string) => sec !== '');
  const id = section[section.length - 1];
  return id;
}
