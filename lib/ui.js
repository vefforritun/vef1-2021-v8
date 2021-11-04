// TODO hér þarf að sækja viðeigandi föll sem nota þarf
import {el} from './helpers.js'
import {playAsText} from './rock-paper-scissors.js'
/**
 * Býr til takka fyrir umferðir, festir `onClick` við og bætir
 * við `.rounds__buttons`.
 *
 * @param {number} max Hámark umferða
 * @param {function} onClick Fall sem keyra skal þegar ýtt er á takka
 */
export function createButtons(max, onClick) {
  // TODO útfæra
  const a = document.querySelector('.rounds__buttons');
  for(let i=0;i<max;i+=2){
    const b = el('button', `${i+1}`);
    b.classList.add('button');
    b.dataset.num = i;
    b.addEventListener('click', onClick);
    a.appendChild(b);
  }

}

export function show(part) {
  // TODO klára að útfæra fyrir allar stöður

  // Element fyrir „parta“ leiks sem við viljum fela og sýna
  const start = document.querySelector('.start');
  const rounds = document.querySelector('.rounds');
  const play = document.querySelector('.play');
  const result = document.querySelector('.result');

  // Felum allt
  start.classList.add('hidden');
  rounds.classList.add('hidden');
  play.classList.add('.hidden');
  result.classList.add('.hidden');

  // og sýnum það sem beðið er um
  switch (part) {
    case 'start':
      start.classList.remove('hidden');
      break;
    case 'rounds':
      rounds.classList.remove('hidden');
      break;
    case 'play':
      play.classList.remove('hidden');
      break;
    case 'result':
      play.classList.remove('hidden');
      break;
    default:
      console.warn(`${part} óþekkt`);
  }

  // Halló debugger! Við getum sett þetta lykilorð til að láta debugger stoppa
  // þar sem við viljum í flæði forritanna okkar
  debugger;
}

/**
 * @typedef {Object} Results
 * @property {string} player Það sem spilari spilaði
 * @property {string} computer Það sem tölva spilaði
 * @property {number} result Útkoma úr leik, `-1`, `0`, eða `1`
 * @property {number} currentRound Núverandi umferð
 * @property {number} totalRounds Heildarfjöldi umferð
 * @property {number} playerWins Sigrar spilara í umferð
 * @property {number} computerWins Sigrar tölvu í umferð
 */

/**
 * Uppfærir öll gildi stöðu skjás innan `.result` áður en sýndur.
 * @param {Results} r Gildi fyrir skjá
 */
export function updateResultScreen({ player, computer, result, currentRound, totalRounds, playerWins, computerWins }) {
  // TODO útfæra

  const resultPlayer = document.querySelector('.result__player');
  const resultresult = document.querySelector('.result__result');
  const resultstatus = document.querySelector('.result__status');
  const resultbuttons = document.querySelector('.result__buttons');
  const resultcomputer = document.querySelector('.result__computer');
  const resultcurrentround = document.querySelector('.result__currentround');
  const resulttotalround = document.querySelector('.result__totalrounds');

  resultPlayer.textContent = `${playAsText(player)}`;
  resultcomputer.textContent = `${playAsText(computer)}`;
  resultresult.textContent = `${result}`;
  resultcurrentround.textContent = `${currentRound}`;
  resulttotalround.textContent = `${totalRounds}`;

}
