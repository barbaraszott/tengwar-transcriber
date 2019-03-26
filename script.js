const tengwarLetters = {
  A: 'beleriand-letters/a.png',
  B: 'beleriand-letters/b.png',
  C: 'beleriand-letters/c-or-k.png',
  D: 'beleriand-letters/d.png',
  E: 'beleriand-letters/e.png',
  F: 'beleriand-letters/f-or-ph.png',
  G: 'beleriand-letters/g.png',
  H: 'beleriand-letters/h.png',
  I: 'beleriand-letters/i.png',
  J: 'beleriand-letters/j-or-gh.png',
  K: 'beleriand-letters/c-or-k.png',
  L: 'beleriand-letters/l.png',
  M: 'beleriand-letters/m.png',
  N: 'beleriand-letters/n.png',
  O: 'beleriand-letters/o.png',
  P: 'beleriand-letters/p.png',
  R: 'beleriand-letters/r.png',
  S: 'beleriand-letters/s.png',
  T: 'beleriand-letters/t.png',
  U: 'beleriand-letters/u.png',
  V: 'beleriand-letters/v.png',
  W: 'beleriand-letters/w.png',
  Y: 'beleriand-letters/y.png',
  Z: 'beleriand-letters/z.png',
  DH: 'beleriand-letters/dh.png',
  KH: 'beleriand-letters/kh.png',
  LH: 'beleriand-letters/lh.png',
  MM: 'beleriand-letters/mm.png',
  NN: 'beleriand-letters/nn.png',
  NG: 'beleriand-letters/ng.png',
  RH: 'beleriand-letters/rh.png',
  Z: 'beleriand-letters/z.png',
  SS: 'beleriand-letters/ss.png',
  TH: 'beleriand-letters/th.png',
};


const input = document.querySelector('#text');
const textInTengwar = document.querySelector('#tengwar');

function validate() {
  // TO DO:
  // const validCharacters = /[a-z]|[0-9]|[?!.,()]|\s/gi;
  const validCharacters = /[a-z]|\s/gi;
  const validText = input.value.match(validCharacters);
  input.value = validText !== null ? validText.join('') : '';
}

input.addEventListener('input', handleInput);

function handleInput() {
  validate();
  transformToTengwar();
}

function clear(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}

function transformEssentialsInText(text) {
  return text.replace(/q/gi, 'k')
    .replace(/x/gi, 'ks')
    .replace(/ph/gi, 'f')
    .replace(/gh/gi, 'j')
    .toUpperCase()
}

function isDiphtong(letter, previousLetter) {
  const tengwarDiphtong = /[dklrt]h|[mns]{2}|ng/i;

  return tengwarDiphtong.test(previousLetter + letter);
}

function createWord(word, paragraph) {
  const letters = word.split('');

  for (let i = 1; i < letters.length; i++) {
    const previous = letters[i - 1];
    const current = letters[i];
    if (isDiphtong(current, previous)) {
      letters[i] = previous + current;
      letters.splice(i - 1, 1);
    }
  }

  console.log(letters);

  const wordInTengwar = document.createElement('span');
  wordInTengwar.classList.add('tengwar-word');
  paragraph.appendChild(wordInTengwar);

  for (let letter of letters) {
    const letterInTengwar = document.createElement('img');
    letterInTengwar.src = tengwarLetters[letter];
    wordInTengwar.appendChild(letterInTengwar);
  }

};

function createParagraph(paragraph) {
  if (paragraph === '') return;

  const newParagraph = document.createElement('p');
  newParagraph.classList.add('tengwar-paragraph');
  textInTengwar.appendChild(newParagraph);

  const words = paragraph.split(' ');

  words.forEach(word => createWord(word, newParagraph));
}

function transformToTengwar() {
  clear(textInTengwar);
  const text = input.value;

  const textInEnglish = transformEssentialsInText(text);

  if (textInEnglish === '') {
    return;
  }

  const paragraphs = textInEnglish.split(/\n/);

  paragraphs.forEach(createParagraph);
};
