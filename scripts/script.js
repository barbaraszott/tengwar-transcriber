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

input.addEventListener('input', transformToTengwar);

function clear(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}

function transformToTengwar(event) {
  clear(textInTengwar);

  const text = input.value;

  if (text === '')
    return;

  const paragraphs = text
    .replace(/qk/gi, 'k')
    .replace(/x/gi, 'ks')
    .replace(/ph/gi, 'f')
    .replace(/gh/gi, 'j')
    .toUpperCase()
    .split(/\n/);

  paragraphs.forEach(function createParagraph(paragraph) {
    if (paragraph === '') return;

    const newParagraph = document.createElement('p');
    newParagraph.classList.add('tengwar-paragraph');
    textInTengwar.appendChild(newParagraph);

    const words = paragraph.split(' ');

    words.forEach(function createWord(word) {
      const wordInTengwar = document.createElement('span');
      wordInTengwar.classList.add('tengwar-word');
      newParagraph.appendChild(wordInTengwar);

      console.log(word);

      var letter;
      var previousLetter;

      for (let i = 0; i < word.length; i++) {
        // for (letter of word) {
        letter = word[i];

        if (!tengwarLetters[letter])
          return;

        if (i > 0) {
          previousLetter = word[i - 1];

          if (letter === 'H' && /[DKLRT]/.test(previousLetter)) {
            letter = previousLetter + letter;
            wordInTengwar.removeChild(wordInTengwar.lastChild);
          }

          if (/[MNS]/.test(letter) && letter === previousLetter) {
            letter = letter + letter;
            //letter = letter.repeat(2);
            wordInTengwar.removeChild(wordInTengwar.lastChild);
          }

          if (letter === 'G' && previousLetter === 'N') {
            letter = 'NG';
            wordInTengwar.removeChild(wordInTengwar.lastChild);
          }
        }

        const letterInTengwar = document.createElement('img');
        letterInTengwar.src = tengwarLetters[letter];
        wordInTengwar.appendChild(letterInTengwar);
      };
    });
  });
};
