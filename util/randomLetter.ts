const alphabet = Array.from('abcdefghijklmnopqrstuvwxyz');

export function getShuffledAlphabet() {
  // const index = Math.floor(Math.random() * 27)
  // return alphabet[index];
  return alphabet
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
}
