import m01 from '../assets/01.mp3'
import m02 from '../assets/02.mp3'
import m03 from '../assets/03.mp3'
import m04 from '../assets/04.mp3'

const q1 = {
  index: 0,
  h1: 'VRAI OU FAUX ?',
  content: 'Le Nord, selon comment on est tourné, ça change tout',
  type: 'truefalse',
  answer: false
}

const q2 = {
  index: 1,
  h1: 'VRAI OU FAUX ?',
  content: 'Quelle est la différence entre un pigeon ?',
  type: 'truefalse',
  answer: true
}

const q3 = {
  index: 2,
  h1: 'TROUVE LE FILM',
  content: m01,
  type: 'blindtest',
  answer: 'harry potter'
}

const q4 = {
  index: 3,
  h1: 'Le mot de passe',
  content: 'Gloubi',
  type: 'text',
  answer: 'boulga'
}

const q5 = {
  index: 4,
  h1: 'Le mot de la fin',
  content: 'Oh excuse me, am I stepping on your...',
  type: 'text',
  answer: 'toes'
}

const q6 = {
  index: 5,
  h1: 'Trouve le film !',
  content: m02,
  type: 'blindtest',
  answer: 'le voyage de chihiro'
}

const q7 = {
  index: 6,
  h1: 'VRAI OU FAUX ?',
  content: "Père castor est un animal lecteur. Peut-on en déduire qu'il est cannibale ?",
  type: 'truefalse',
  answer: false
}

const q8 = {
  index: 7,
  h1: 'VRAI OU FAUX ?',
  content: "Le Kiri c'est bien ",
  type: 'truefalse',
  answer: false
}

const q9 = {
  index: 8,
  h1: 'Crevette revisitée',
  content: "Comment s'appelle une crevette revisitée ?",
  type: 'text',
  answer: 'jambalaya'
}

const q10 = {
  index: 9,
  h1: 'Le mot de la fin !',
  content: "Mais qu'est-ce que c'est que cette matière ? C'est de la merde ?! Non c'est...",
  type: 'text',
  answer: 'kloug'
}
const q11 = {
  index: 10,
  h1: 'Trouve le jeu !',
  content: m03,
  type: 'blindtest',
  answer: 'zelda'
}

const q12 = {
  index: 11,
  h1: 'Les chiens ne font pas des chats',
  content: 'Comment appelle-t-on le petit du dromadaire',
  type: 'text',
  answer: 'dromelon'
}

const q13 = {
  index: 12,
  h1: 'Les chiens ne font pas des chats',
  content: "Comment appelle-t-on le petit de l'oiseau",
  type: 'text',
  answer: 'oisillon'
}

const q14 = {
  index: 13,
  h1: 'Les chiens ne font pas des chats',
  content: 'Comment appelle-t-on le petit du Petic',
  type: 'text',
  answer: 'peticon'
}
const q15 = {
  index: 14,
  h1: 'Trouve le film !',
  content: m04,
  type: 'blindtest',
  answer: 'et'
}

export const questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15]
