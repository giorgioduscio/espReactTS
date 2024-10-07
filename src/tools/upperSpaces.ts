export function upperSpaces(phrase:string) {
  if(phrase) return phrase[0].toUpperCase() +phrase.slice(1) .replace('_',' ')
  return ''
}