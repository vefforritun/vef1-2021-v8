// TODO hér vantar að sækja viðeigandi föll úr öðrum modules
import { show, createButtons } from './lib/ui.js'
import { checkGame, computerPlay } from './lib/ui.js'

//import {  } from './lib/helpers';
//import {  } from './lib/rock-paper-scissors';

/** Hámarks fjöldi best-of leikja, ætti að vera jákvæð heiltala stærri en 0 */
const MAX_BEST_OF = 10;

/** Fjöldi leikja sem á að spila í núverandi umferð */
let totalRounds;

/** Númer umferðar í núverandi umferð */
let currentRound;

/** Sigrar spilara í núverandi umferð */
let playerWins = 0;

/** Töp spilara í núverandi umferð */
let computerWins = 0;

/**
 * Fjöldi sigra spilara í öllum leikjum. Gætum reiknað útfrá `games` en til
 * einföldunar höldum við utan um sérstaklega.
 */
let totalWins = 0;

/**
 * Utanumhald um alla spilaða leiki, hver leikur er geymdur á forminu:
 *
 * ```
 * {
 *   player: 2,
 *   computer: 1,
 *   win: true,
 * }
 * ```
 */
const games = [];

/**
 * Uppfærir stöðu eftir að spilari hefur spilað.
 * Athugar hvort leik sé lokið, uppfærir stöðu skjá með `updateResultScreen`.
 * Birtir annað hvort `Næsti leikur` takka ef leik er lokið eða `Næsta umferð`
 * ef spila þarf fleiri leiki.
 *
 * @param {number} player Það sem spilari spilaði
 */
function playRound(player) {

 // Komumst að því hvað tölva spilaði og athugum stöðu leiks
 const computer = computerPlay().toString;
 const result = checkGame(player, computer);
 // Uppfærum result glugga áður en við sýnum, hér þarf að importa falli
  updateResultScreen({
    player: player.toString(),
    computer,
    result,
    currentRound,
    totalRounds,
    playerWins,
    computerWins,
  });

  // Uppfærum teljara ef ekki jafntefli, verðum að gera eftir að við setjum titil

  // Ákveðum hvaða takka skuli sýna

  // Sýnum niðurstöðuskjá
  show('result')
}

/**
 * Fall sem bregst við því þegar smellt er á takka fyrir fjölda umferða
 * @param {Event} e Upplýsingar um atburð
 */
function round(e) {
  // TODO útfæra
  totalRounds = e.target.innerHTML
  show('play')
  }

// Takki sem byrjar leik
document
  .querySelector('.rounds__button')
  .addEventListener('click', () => show('rounds'))
document
  .querySelector('.play__button')
  .addEventListener('click', () => show('play'))
document
  .querySelector('.result__button')
  .addEventListener('click', () => show('result'))
// Búum til takka
createButtons(MAX_BEST_OF, round);
document
  .querySelector('.scissor__button')
  .addEventListener('click', () => show(1))
document
  .querySelector('.paper__button')
  .addEventListener('click', () => show(2))
document
  .querySelector('.rock__button')
  .addEventListener('click', () => show(3))
// Event listeners fyrir skæri, blað, steinn takka
// TODO
document.querySelector('button.scissor')
document.querySelector('button.paper')
document.querySelector('button.rock')

/**
 * Uppfærir stöðu yfir alla spilaða leiki þegar leik lýkur.
 * Gerir tilbúið þannig að hægt sé að spila annan leik í framhaldinu.
 */
function finishGame() {

  // Bætum við nýjasta leik

  // Uppfærum stöðu

  // Bætum leik við lista af spiluðum leikjum

  // Núllstillum breytur

  // Byrjum nýjan leik!
}

// Næsta umferð og ljúka leik takkar
document.querySelector('button.finishGame').addEventListener('click', finishGame);
// TODO takki sem fer með í næstu umferð
document.querySelector('button.nextround').addEventListener('click', () => show('play'));
